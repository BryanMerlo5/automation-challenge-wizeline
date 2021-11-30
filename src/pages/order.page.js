const data = require('../data/enum.json');
const utils = require('../utils/utils');
/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
class OrderPage {
    /**
     * define selectors using getter methods
     */
    get lblHeader() { return $('.title');}
    get lblThankYou() { return $('.complete-header');}
    get lblDescription() { return $('.complete-text');}
    get imgLogo() { return $('.pony_express');}
    get btnBackHome() { return $('#back-to-products');}

    /**
     * is to get Header is displayed
     */
     async isHeaderDisplayed() {
        return await utils.isDisplayed(this.lblHeader);
    }

    /**
     * is to get Header is displayed
     */
     async waitToOrderPage() {
        let i, title;
        do {
            i = i + 1;
            await browser.pause(1000);
            title = await this.lblTitle.getValue();
        } while(title === 'CHECKOUT: COMPLETE!' && i < 100);
    }

    /**
     * is to get Header is displayed
     */
     async isBackHomeDisplayed() {
        return await utils.isDisplayed(this.btnBackHome);
    }


}

module.exports = new OrderPage();