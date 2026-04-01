// sidepanel.js
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');
const chatLog = document.getElementById('chat-log');
const statusMsg = document.getElementById('status');

let socket = null;
const BROWSER_SERVER_PORT = 3500;

function connect() {
  try {
    socket = new WebSocket(`ws://127.0.0.1:${BROWSER_SERVER_PORT}`);

    socket.onopen = () => {
      if (statusMsg) {
        statusMsg.textContent = 'Connected to Backend';
        statusMsg.style.color = '#4ade80';
      }
    };

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.type === 'AI_RESPONSE') {
        appendMessage('AI', data.message);
      }
    };

    socket.onerror = (error) => {
      console.error('Sidepanel WebSocket Error:', error);
    };

    socket.onclose = () => {
      if (statusMsg) {
        statusMsg.textContent = 'Disconnected';
        statusMsg.style.color = '#ef4444';
      }
      setTimeout(connect, 2000);
    };
  } catch (e) {
    console.error('WebSocket Exception:', e);
    setTimeout(connect, 2000);
  }
}

function appendMessage(sender, text) {
  const div = document.createElement('div');
  div.innerHTML = `<strong>${sender}:</strong> ${text}`;
  div.style.marginBottom = '8px';
  chatLog.appendChild(div);
  chatLog.scrollTop = chatLog.scrollHeight;
}

sendBtn.addEventListener('click', () => {
  const text = userInput.value;
  if (!text) return;

  appendMessage('You', text);
  socket.send(JSON.stringify({ type: 'USER_PROMPT', payload: text }));
  userInput.value = '';
});

connect();
