const LoginPage = require('../../src/pages/login.page');
const HomePage = require('../../src/pages/home.page');
const CartPage = require('../../src/pages/cart.page');
const data = require('../../src/data/enum.json');
const Utils = require('../../src/utils/utils');
const expect = require('chai').expect;
const CheckoutPage = require('../../src/pages/checkout.page');
const OverviewPage = require('../../src/pages/overview.page');
const OrderPage = require('../../src/pages/order.page');

describe('Purchasing Products', () => {
    it('Should complete a purchase', async () => {
        const timeOut = 10000;
        await LoginPage.open();
        await Utils.waitForEnabled(LoginPage.imgLogo, true, timeOut);
        await LoginPage.login(data.user.standard, data.pass);
        await Utils.waitForEnabled(HomePage.lnkCart);
        await Utils.waitForEnabled(HomePage.lblProducts);
        
        await HomePage.selectItem(data.items.firstItem);
        let quantity = await HomePage.itemsAddedToCart();
        expect(quantity).to.be.equal(1);

        await HomePage.selectItem(data.items.secondItem);
        quantity = await HomePage.itemsAddedToCart();
        expect(quantity).to.be.equal(2);

        await HomePage.selectItem(data.items.thirdItem);
        quantity = await HomePage.itemsAddedToCart();
        expect(quantity).to.be.equal(3);

        await HomePage.goToCartPage();

        CartPage.lblTitle.waitForEnabled();
        const isCartPage = await CartPage.getTitlePage();
        console.log('The cart page title issss:', isCartPage);
        expect(isCartPage).to.be.equal(data.title.cartPage);
        
        let isFirstItemDisplayed = await CartPage.checkItemAdded(data.items.firstItem);
        expect(isFirstItemDisplayed).to.be.equal(true);
        let isSecondItemDisplayed = await CartPage.checkItemAdded(data.items.secondItem);
        expect(isSecondItemDisplayed).to.be.equal(true);
        let isThirdItemDisplayed = await CartPage.checkItemAdded(data.items.thirdItem);
        expect(isThirdItemDisplayed).to.be.equal(true);

        CartPage.btnChekout.click();
        CheckoutPage.lblTitle.waitForEnabled();
        const isCheckoutPage = await CheckoutPage.getTitlePage();
        console.log('The checkout page title is:', isCheckoutPage);
        expect(isCheckoutPage).to.be.equal(data.title.cartPage)
        
        CheckoutPage.setFirstName(data.user.firstName);
        CheckoutPage.setLastName(data.user.lastName);
        CheckoutPage.setPostalCode(data.user.postalCode);
        CheckoutPage.btnContinue.click();

        OverviewPage.waitToSubtotalExist();
        OverviewPage.waitToTaxExist();
        OverviewPage.waitToTotalExist();

        OverviewPage.btnFinish.click();

        // Validate the user navigates to the order confirmation page
        const isDisplayed = await OrderPage.isHeaderDisplayed();
        const isBackHomeDisplayed = await OrderPage.isBackHomeDisplayed();
        expect(isDisplayed).to.be.equal(true);
        expect(isBackHomeDisplayed).to.be.equal(true);
        
    });
});
