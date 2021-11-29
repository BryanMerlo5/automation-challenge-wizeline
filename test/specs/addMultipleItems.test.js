const LoginPage = require('../../src/pages/login.page');
const HomePage = require('../../src/pages/home.page');
const CartPage = require('../../src/pages/cart.page');
const data = require('../../src/data/enum.json');
const Utils = require('../../src/utils/utils');
const expect = require('chai').expect;
const assert = require('assert');

describe('Purchasing Products', () => {
    it('Should add multiple items to cart', async () => {
        const timeOut = 10000;
        const firstItem = 'Backpack';
        const secondItem = 'Bike Light';
        await LoginPage.open();
        await Utils.waitForEnabled(LoginPage.imgLogo, true, timeOut);
        await LoginPage.login(data.user.standard, data.pass);
        await Utils.waitForEnabled(HomePage.lnkCart);
        await Utils.waitForEnabled(HomePage.lblProducts);
        
        await HomePage.selectItem(firstItem);
        let quantity = await HomePage.itemsAddedToCart();
        expect(quantity).to.be.equal(1);

        await HomePage.selectItem(secondItem);
        quantity = await HomePage.itemsAddedToCart();
        expect(quantity).to.be.equal(2);

        await HomePage.goToCartPage();

        const isCartPage = await CartPage.getTitlePage();
        expect(isCartPage).to.be.equal('YOUR CART');
        
        // Validate all the items that have been added to the shopping cart page
        let isFirstItemDisplayed = await CartPage.checkItemAdded('Backpack');
        expect(isFirstItemDisplayed).to.be.equal(true);
        let isSecondItemDisplayed = await CartPage.checkItemAdded('Bike Light');
        expect(isSecondItemDisplayed).to.be.equal(true);
    });
});
