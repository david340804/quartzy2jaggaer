// Insert an item's data into the NonCatalog Form's data fields
function dumpIntoNonCatalogForm(item){

    //Set the form add to cart action
    document.getElementById('formActionList').value = 'Header_AddToCart';

    document.getElementsByName('NewPrdFm_CatalogNo:Form')[0].value = item.catalogNumber;

    document.getElementsByName('NewPrdFm_ProductDesc:Form')[0].value = item.name;

    document.getElementsByName('FormQuantity')[0].value = item.quantity;

    document.getElementsByName('Price_10000:Form')[0].value = item.unitPrice;
}


// Listen for Quartzy items from background script
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {

    // Filter for items with isQuartzyItem flag
    if (request.isQuartzyItem){
        dumpIntoNonCatalogForm(request.item)
    }
});

console.log('Listening for Quartzy item data messages...');