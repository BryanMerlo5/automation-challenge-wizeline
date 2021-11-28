/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
class HomePage {
    /**
     * define selectors using getter methods
     */
    get lnkCart() { return $('.shopping_cart_link');}
    get lblProducts() { return $('//span[contains(text(), "Products")]'); }
    get btnSubmit() { return $('button[type="submit"]'); }
}

module.exports = new HomePage();