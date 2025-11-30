function isInBrowserExtensionContext() {
  const isExtensionContext = hasChromeRuntimeId() || hasBrowserRuntimeId();
  return isExtensionContext;
}
function hasChromeRuntimeId() {
  var _a;
  let isExtensionContext = false;
  try {
    if ((_a = chrome == null ? void 0 : chrome.runtime) == null ? void 0 : _a.id) {
      isExtensionContext = true;
    }
  } catch (e) {
  }
  return isExtensionContext;
}
function hasBrowserRuntimeId() {
  var _a;
  let isExtensionContext = false;
  try {
    if ((_a = browser == null ? void 0 : browser.runtime) == null ? void 0 : _a.id) {
      isExtensionContext = true;
    }
  } catch (e) {
  }
  return isExtensionContext;
}
function initializeContentScriptService() {
  if (isInBrowserExtensionContext()) {
    chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
      console.log("Content script received message -->", message);
      if (message && message.type === "ping-scope360") {
        sendResponse({ active: true });
      }
    });
  }
}
initializeContentScriptService();
console.log("Content Service Script loaded");
