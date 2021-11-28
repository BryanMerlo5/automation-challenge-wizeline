const data = require('../data/enum.json');
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
    get mnuOptions() { return $('div[aria-hidden="false"][class="bm-menu-wrap"]'); }
    get lblLogout() { return $('#logout_sidebar_link'); }
    get ddlSort() { return $('[data-test="product_sort_container"]'); }
    get lblActiveOption() { return $('[class="active_option"]'); }
    get lblLogout() { return $('#logout_sidebar_link'); }

    /**
     * a method to Logout through hamburguer menu
     * e.g. to logout from hamburguer menu
     */
     async logout () {
        await this.btnMenu.click();
        await this.mnuOptions.waitForDisplayed();
        await this.lblLogout.click();
    }

    async selectOptionToSortProduct (option) {
        const selectBox = await this.ddlSort;
        await selectBox.selectByVisibleText(option);
    }
}

module.exports = new HomePage();