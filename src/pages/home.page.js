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
    get btnMenu() { return $('button[id="react-burger-menu-btn"]'); }
    get lblOptions() { return $('div[aria-hidden="false"][class="bm-menu-wrap"]'); }
    get lblLogout() { return $('#logout_sidebar_link'); }

    /**
     * a method to Logout through hamburguer menu
     * e.g. to logout from hamburguer menu
     */
     async logout () {
        await this.btnMenu.click();
        await this.lblOptions.waitForDisplayed();
        await this.lblLogout.click();
    }
}

module.exports = new HomePage();