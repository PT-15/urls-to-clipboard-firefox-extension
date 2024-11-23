function getURLs() {
    browser.tabs.create({
        url: "https://developer.mozilla.org",
    });
}

browser.browserAction.onClicked.addListener(getURLs);
