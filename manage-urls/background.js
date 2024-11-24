function onError(error) {
    console.error(`Error: ${error}`);
}

function urlsToClipboard(tabs) {
    navigator.clipboard.writeText("Got inside the function");
    navigator.clipboard.writeText("The tab list size is " + tabs.length);
    let urlList = "";
    for (const tab of tabs) {
        try {
            urlList += tab.url + "\n";
        } catch (error) {
            console.error(error.message);
        }
    }
    navigator.clipboard.writeText(urlList);
}

function getURLs() {
    navigator.clipboard.writeText("This is before getting the tabs");
    var getTabs = browser.tabs.query({});
    getTabs.then(urlsToClipboard, onError);
    navigate.clipboard.writeText("Got back from getting the tabs")
}

browser.browserAction.onClicked.addListener(getURLs);

