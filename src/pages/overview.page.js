const data = require('../data/enum.json');
/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
class OverviewPage {
    /**
     * define selectors using getter methods
     */
    get btnFinish() { return $('#finish');}
    get lblPageTitle() { return $('.title');}
    get txtZipCode() { return $('#postal-code');}
    get btnContinue() { return $('#continue');}
    get lnkCart() { return $('.shopping_cart_link');}
    get lnkCart() { return $('.shopping_cart_link');}

}

module.exports = new OverviewPage();