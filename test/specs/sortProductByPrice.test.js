const LoginPage = require('../../src/pages/login.page');
const HomePage = require('../../src/pages/home.page');
const data = require('../../src/data/enum.json');
const Utils = require('../../src/utils/utils');
const expect = require('chai').expect;
const assert = require('assert');

describe('Sorting products', () => {
    it('Should short the products by price(low to high)', async () => {
        const timeOut = 10000;
        const priceLowToHigh = 'PRICE (LOW TO HIGH)';
        await LoginPage.open();
        await Utils.waitForEnabled(LoginPage.imgLogo, true, timeOut);
        await LoginPage.login(data.user.standard, data.pass);
        await Utils.waitForEnabled(HomePage.lnkCart);
        await Utils.waitForEnabled(HomePage.lblProducts);
        await HomePage.selectOptionToSortProduct(data.sortProduct.byPriceLowToHigh);
        // Validate the products have been sorted by price correctly
        const isSortedByLow = await HomePage.lblActiveOption.getText();
        expect(isSortedByLow).to.be.equal(priceLowToHigh);
    });
});
