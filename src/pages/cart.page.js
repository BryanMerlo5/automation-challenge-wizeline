const data = require('../data/enum.json');
/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
class CartPage {
    /**
     * define selectors using getter methods
     */
    get lblTitle() { return $('.title');}
    get btnChekout() { return $('#checkout');}
    get btnContinueShopping() { return $('#continue-shopping');}
    get btnBackpack() { return $('#remove-sauce-labs-backpack');}
    get lblProductNames() { return $('[class="inventory_item_name"]');}
    get lblBackpackName() { return $('//*[contains(text(), "Sauce Labs Backpack") and @class="inventory_item_name"]');}
    get lblBikeLightName() { return $('//*[contains(text(), "Sauce Labs Bike Light") and @class="inventory_item_name"]');}
    get lblBackpackName() { return $('//*[contains(text(), "Sauce Labs Onesie") and @class="inventory_item_name"]');}
}

module.exports = new CartPage();