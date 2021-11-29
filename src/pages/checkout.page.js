const data = require('../data/enum.json');
const utils = require('../utils/utils');
/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
class CheckoutPage {
    /**
     * define selectors using getter methods
     */
    get txtFirstName() { return $('#first-name');}
    get txtLastName() { return $('#last-name');}
    get txtZipCode() { return $('#postal-code');}
    get btnContinue() { return $('#continue');}
    get lnkCart() { return $('.shopping_cart_link');}
    get lnkCart() { return $('.shopping_cart_link');}
    get lblTitle() { return $('.title');}

    /**
     * a method to get the title of the cart page
     * e.g. returns the title
     */
    async getTitlePage () {
        const title = await this.lblTitle.getText();
        return title;
    }

    /**
     * a method to set a value in name textbox
     * e.g. Alex as name
     */
    async setFirstName (name) {
        await utils.waitForEnabled(this.txtFirstName, true, 5000);
        await this.txtFirstName.setText(name);
    }

    /**
     * a method to set a value in lastName textbox
     * e.g. Rodriguez as name
     */
    async setLastName (lastName) {
        await utils.waitForEnabled(this.txtLastName, true, 5000);
        await this.txtLastName.setText(lastName);
    }

    /**
     * a method to set a value in postal code textbox
     * e.g. 64100 as postal code
     */
    async setPostalCode (code) {
        await utils.waitForEnabled(this.txtZipCode, true, 5000);
        await this.txtZipCode.setText(code);
    }
}

module.exports = new CheckoutPage();