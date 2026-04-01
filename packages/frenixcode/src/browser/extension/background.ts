// background.ts - Service Worker
declare var chrome: any;

let socket: WebSocket | null = null;
let currentTabId: number | null = null;

function connectWebSocket() {
  // Use 127.0.0.1 to avoid IPv6 issues on some systems
  try {
    socket = new WebSocket('ws://127.0.0.1:3500');

    socket.onopen = () => {
      console.log('Connected to Frenix Backend');
    };

    socket.onmessage = async (event: MessageEvent) => {
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
      setTimeout(connectWebSocket, 3000); // Reconnect
    };
  } catch (e) {
    console.error('Failed to create WebSocket:', e);
    setTimeout(connectWebSocket, 3000);
  }
}

async function handleAction(action: any, actionId: string) {
  if (!currentTabId) {
    // Try to get current tab if not set
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    if (tab) currentTabId = tab.id;
    else return;
  }

  const target = { tabId: currentTabId };

  try {
    // For navigation, we don't necessarily need the debugger
    if (action.action === 'navigate') {
      await chrome.tabs.update(currentTabId, { url: action.url });
      return;
    }

    await chrome.debugger.attach(target, "1.3");

    if (action.action === 'click') {
      await chrome.debugger.sendCommand(target, "Input.dispatchMouseEvent", {
        type: "mousePressed",
        x: action.x,
        y: action.y,
        button: "left",
        clickCount: 1
      });
      await chrome.debugger.sendCommand(target, "Input.dispatchMouseEvent", {
        type: "mouseReleased",
        x: action.x,
        y: action.y,
        button: "left",
        clickCount: 1
      });
    } else if (action.action === 'type') {
      await chrome.debugger.sendCommand(target, "Input.dispatchKeyEvent", {
        type: "keyDown",
        text: action.value,
        unmodifiedText: action.value
      });
    } else if (action.action === 'scroll') {
      const distance = action.value === 'down' ? 500 : -500;
      await chrome.scripting.executeScript({
        target: { tabId: currentTabId },
        func: (dist: number) => window.scrollBy(0, dist),
        args: [distance]
      });
    } else if (action.action === 'scrape') {
      const result = await chrome.scripting.executeScript({
        target: { tabId: currentTabId },
        func: () => document.documentElement.innerText
      });
      socket?.send(JSON.stringify({ 
        type: 'SCRAPE_RESULT', 
        actionId, 
        payload: result[0].result 
      }));
    }

    await chrome.debugger.detach(target);
  } catch (err) {
    console.error('Browser action failed:', err);
    // If it's already attached, just attempt to continue (might need more logic here)
  }
}

chrome.action.onClicked.addListener((tab: any) => {
  chrome.sidePanel.open({ windowId: tab.windowId });
});

chrome.tabs.onActivated.addListener((activeInfo: any) => {
  currentTabId = activeInfo.tabId;
});

chrome.tabs.onUpdated.addListener((tabId: number, changeInfo: any, tab: any) => {
    if (changeInfo.status === 'complete' && tab.active) {
        currentTabId = tabId;
    }
});

connectWebSocket();
