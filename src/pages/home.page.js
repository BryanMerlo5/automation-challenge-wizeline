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
    get btnAddToCartBackpack() { return $('#add-to-cart-sauce-labs-backpack'); }
    get btnAddToCartBikeLight() { return $('#add-to-cart-sauce-labs-bike-light'); }
    get btnAddToCartOnesie() { return $('#add-to-cart-sauce-labs-onesie'); }
    get lblShopingCartBadge() { return $('.shopping_cart_badge'); }
    get btnCartShopping() { return $('.shopping_cart_link'); }

    /**
     * a method to Logout through hamburguer menu
     * e.g. to logout from hamburguer menu
     */
     async logout () {
        await this.btnMenu.click();
        await this.mnuOptions.waitForDisplayed();
        await this.lblLogout.click();
    }

    /**
     * a method to select an option given the drop down list element
     * e.g. to select A from select type of item
     */
    async selectOptionToSortProduct (option) {
        const selectBox = await this.ddlSort;
        await selectBox.selectByVisibleText(option);
    }
}

module.exports = new HomePage();