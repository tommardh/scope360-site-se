function initializeContentScriptService() {
  initializeContentScriptMessageHandler();
}
function initializeContentScriptMessageHandler() {
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log("Content script received message:", message);
    if (message && message.type === "ping-scope360") {
      sendResponse({ active: true });
    }
  });
}
export {
  initializeContentScriptService
};
