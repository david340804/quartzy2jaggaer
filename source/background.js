// Send message to NonCatalogForm Tab
function sendToNonCatlogForm(item){
    chrome.tabs.query({}, function(tabs) {

        // Create message payload object
        var message = {
            isQuartzyItem: true,
            item: item
        };

        // Message item to all the tabs
        for (var i=0; i<tabs.length; ++i) {
            chrome.tabs.sendMessage(tabs[i].id, message);
        }
    });
}

// Execute Quartzy scraping content script on the active tab
function copyFromQuartzy(){
    chrome.tabs.executeScript({
          file: 'scrapeQuartzy.js'
    });
}

//Listen for the browser action button click to begin copying data
chrome.browserAction.onClicked.addListener(copyFromQuartzy)

// Listen for message with item from Quartzy content script
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {

    if (request.isQuartzyItem){

        //console.log(request.item)
        sendToNonCatlogForm(request.item);
        sendResponse(request.item);
    }
  });