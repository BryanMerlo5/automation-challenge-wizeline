const data = require('../data/enum.json');
/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
class OrderPage {
    /**
     * define selectors using getter methods
     */
    get lblHeader() { return $('.title');}
    get lblHeader() { return $('.complete-header');}
    get lblDescription() { return $('.complete-text');}
    get imgLogo() { return $('.pony_express');}
    get btnContinue() { return $('#continue');}
    get btnBackHome() { return $('#back-to-products');}

}

module.exports = new OrderPage();