
function onMessageExternal(request, sender, sendResponse) {
    if (request && request.message) {
        if (request.message === 'chooseDesktopMedia') {
            chrome.desktopCapture.chooseDesktopMedia(['screen', 'window'], sender.tab, function (mediaSourceId) {
                if (!mediaSourceId || !mediaSourceId.length) {
                    sendResponse({
                        error: 'notAllowed'
                    });
                } else {
                    sendResponse({
                        mediaSourceId: mediaSourceId
                    });
                }
            });
            return true;
        } else if (request.message === 'version') {
            sendResponse({
                version: '1.0.0'
            });
        }
    }
}

// Add a listener for external messages.
chrome.runtime.onMessageExternal.addListener(onMessageExternal);
