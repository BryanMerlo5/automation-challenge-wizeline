const LoginPage = require('../../src/pages/login.page');
const HomePage = require('../../src/pages/home.page');
const CartPage = require('../../src/pages/cart.page');
const data = require('../../src/data/enum.json');
const Utils = require('../../src/utils/utils');
const expect = require('chai').expect;
const assert = require('assert');

describe('Purchasing Products', () => {
    it('Should add a specific item "Sauce Labs Onesie" to the cart', async () => {
        const timeOut = 10000;
        await LoginPage.open();
        await Utils.waitForEnabled(LoginPage.imgLogo, true, timeOut);
        await LoginPage.login(data.user.standard, data.pass);
        await Utils.waitForEnabled(HomePage.lnkCart);
        await Utils.waitForEnabled(HomePage.lblProducts);
        
        // Check quantity of item added to the cart
        await HomePage.selectItem(data.items.thirdItem);
        let quantity = await HomePage.itemsAddedToCart();
        expect(quantity).to.be.equal(1);

        await HomePage.goToCartPage();

        const isCartPage = await CartPage.getTitlePage();
        expect(isCartPage).to.be.equal(data.title.cartPage);
        
        // Validate the correct product was added to the cart.
        let isFirstItemDisplayed = await CartPage.checkItemAdded(data.items.thirdItem);
        expect(isFirstItemDisplayed).to.be.equal(true);
    });
});
