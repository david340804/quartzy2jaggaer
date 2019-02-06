// The item to broadcast from this page
item = {}


// Scrape item data from DOM
detailsPane = document.getElementsByClassName('details-panel')[0]

item.name = detailsPane.getElementsByClassName('item-name')[0].children[0].children[0].value

item.catalogNumber = detailsPane.getElementsByClassName('catalog-number')[0].value

item.quantity = detailsPane.getElementsByClassName('quantity-input')[0].value

item.unitPrice = detailsPane.getElementsByClassName('unit-price-input')[0].value


// Transmit item to background script
chrome.runtime.sendMessage(
  {
    isQuartzyItem: true,
    item: item
  },
  function(response) {
    // console.log('Message item to background' + JSON.stringify(response));
  }
);