// background.js - Service Worker
let socket = null;
let currentTabId = null;

function connectWebSocket() {
  try {
    socket = new WebSocket('ws://127.0.0.1:3500');

    socket.onopen = () => {
      console.log('Connected to Frenix Backend');
    };

    socket.onmessage = async (event) => {
      const data = JSON.parse(event.data);
      if (data.type === 'ACTION') {
        await handleAction(data.payload, data.actionId);
      }
    };

    socket.onerror = (error) => {
      console.error('WebSocket Error:', error);
    };

    socket.onclose = () => {
      console.log('WebSocket closed. Reconnecting in 3s...');
      setTimeout(connectWebSocket, 3000);
    };
  } catch (e) {
    console.error('WebSocket Exception:', e);
    setTimeout(connectWebSocket, 3000);
  }
}

async function handleAction(action, actionId) {
  if (!currentTabId) {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    if (tab) currentTabId = tab.id;
    else return;
  }

  const target = { tabId: currentTabId };

  try {
    if (action.action === 'navigate') {
      await chrome.tabs.update(currentTabId, { url: action.url });
      return;
    }

    await chrome.debugger.attach(target, "1.3");

    if (action.action === 'click') {
      await chrome.debugger.sendCommand(target, "Input.dispatchMouseEvent", {
        type: "mousePressed", x: action.x, y: action.y, button: "left", clickCount: 1
      });
      await chrome.debugger.sendCommand(target, "Input.dispatchMouseEvent", {
        type: "mouseReleased", x: action.x, y: action.y, button: "left", clickCount: 1
      });
    } else if (action.action === 'type') {
      await chrome.debugger.sendCommand(target, "Input.dispatchKeyEvent", {
        type: "keyDown", text: action.value, unmodifiedText: action.value
      });
    } else if (action.action === 'scroll') {
      const distance = action.value === 'down' ? 500 : -500;
      await chrome.scripting.executeScript({
        target: { tabId: currentTabId },
        func: (dist) => window.scrollBy(0, dist),
        args: [distance]
      });
    } else if (action.action === 'scrape') {
      const result = await chrome.scripting.executeScript({
        target: { tabId: currentTabId },
        func: () => document.documentElement.innerText
      });
      socket.send(JSON.stringify({ type: 'SCRAPE_RESULT', actionId, payload: result[0].result }));
    }

    await chrome.debugger.detach(target);
  } catch (err) {
    console.error('Action failed:', err);
  }
}

chrome.action.onClicked.addListener((tab) => {
  chrome.sidePanel.open({ windowId: tab.windowId });
});

chrome.tabs.onActivated.addListener((activeInfo) => {
  currentTabId = activeInfo.tabId;
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete' && tab.active) {
        currentTabId = tabId;
    }
});

connectWebSocket();
