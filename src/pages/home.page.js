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
    get btnRemoveToCartBackpack() { return $('#remove-sauce-labs-backpack'); }
    get btnRemoveToCartBikeLight() { return $('#remove-sauce-labs-bike-light'); }
    get btnRemoveToCartOnesie() { return $('#remove-sauce-labs-onesie'); }

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

    /**
     * a method to select an item given its name
     * e.g. to select Backpackage item to the cart
     */
    async selectItem (name) {
        switch(name) {
            case 'Backpack': 
                await this.btnAddToCartBackpack.click();
                await this.btnRemoveToCartBackpack.waitForDisplayed();
                break;
            case 'Bike Light':
                await this.btnAddToCartBikeLight.click();
                await this.btnRemoveToCartBikeLight.waitForDisplayed();
                break;
            case 'Onesie':
                await this.btnAddToCartOnesie.click();
                await this.btnRemoveToCartOnesie.waitForDisplayed();
                break;
        }
    }

    /**
     * a method to check the number of items added to the cart
     * e.g. returns the number of items added to the cart
     */
    async itemsAddedToCart () {
        const items = await this.lblShopingCartBadge.getText();
        return Number(items);
    }

    /**
     * a method to go cart page
     */
    async goToCartPage() {
        const isDisplayed = await this.btnCartShopping.isDisplayed();
        if(isDisplayed) {
            await this.btnCartShopping.click();
        }
    }
}

module.exports = new HomePage();