import { Log } from '../util/log';

const log = Log.create({ service: 'browser.server' });
const BROWSER_SERVER_PORT = parseInt(process.env.OPENCODE_BROWSER_PORT || '3500');

let extensionSocket: any = null;
const pendingActions = new Map<string, (value: any) => void>();

// Start the server using Bun's native WebSocket support
const server = Bun.serve({
  port: BROWSER_SERVER_PORT,
  hostname: '0.0.0.0',
  fetch(req, server) {
    // Attempt to upgrade to a WebSocket connection
    if (server.upgrade(req)) {
      return; // Bun handles the response
    }
    return new Response("Frenix Browser Server is running", { status: 200 });
  },
  websocket: {
    open(ws) {
      log.info('New connection established');
      extensionSocket = ws;
    },
    message(ws, data) {
      try {
        const message = JSON.parse(data.toString());
        log.info('Received from extension:', { type: message.type, actionId: message.actionId });

        if (message.type === 'SCRAPE_RESULT' || message.type === 'ACTION_RESULT') {
          const resolve = pendingActions.get(message.actionId);
          if (resolve) {
            resolve(message.payload);
            pendingActions.delete(message.actionId);
          }
        }
      } catch (err) {
        log.error('Failed to parse message', { error: err });
      }
    },
    close(ws) {
      log.info('Extension disconnected');
      if (extensionSocket === ws) {
        extensionSocket = null;
      }
    },
  },
});

log.info(`Frenix Browser Server running on ws://localhost:${server.port}`);

export const BrowserControl = {
  sendAction: async (action: any) => {
    if (extensionSocket) {
      const actionId = Math.random().toString(36).substring(7);
      const promise = new Promise((resolve) => {
        pendingActions.set(actionId, resolve);
        // Timeout after 15 seconds for browser actions
        setTimeout(() => {
          if (pendingActions.has(actionId)) {
            pendingActions.delete(actionId);
            resolve({ error: 'Timeout' });
          }
        }, 15000);
      });

      extensionSocket.send(JSON.stringify({ type: 'ACTION', actionId, payload: action }));
      
      // If it's a scrape, wait for the result
      if (action.action === 'scrape') {
        return await promise;
      }
      
      // For other actions, we currently fire and forget or could wait for ACK
      return true;
    }
    log.error('No extension connected to browser server');
    return false;
  }
};
