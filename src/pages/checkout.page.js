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
     * waits to CheckoutPage is visible
     */
    async waitToCheckoutPage () {
        let i, title;
        do {
            i = i + 1;
            await browser.pause(1000);
            title = await this.lblTitle.getValue();
        } while(title === 'CHECKOUT: YOUR INFORMATION' && i < 100);
    }

    /**
     * a method to get the title of the cart page
     * e.g. returns the title
     */
     async getTitlePage () {
        const title = await this.lblTitle.getValue();
        return title;
    }
    
    /**
     * a method to set a value in name textbox
     * e.g. Alex as name
     */
    async setFirstName (name) {
        await this.txtFirstName.setValue(name);
    }

    /**
     * a method to set a value in lastName textbox
     * e.g. Rodriguez as name
     */
    async setLastName (lastName) {
        await this.txtLastName.setValue(lastName);
    }

    /**
     * a method to set a value in postal code textbox
     * e.g. 64100 as postal code
     */
    async setPostalCode (code) {
        await this.txtZipCode.setValue(code);
    }
}

module.exports = new CheckoutPage();