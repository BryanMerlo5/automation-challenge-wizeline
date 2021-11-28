const LoginPage = require('../../src/pages/login.page');
const HomePage = require('../../src/pages/home.page');
const data = require('../../src/data/enum.json');
const Utils = require('../../src/utils/utils');
const expect = require('chai').expect;

describe('My Login application', () => {
    it('Should login successfully with valid credentials', async () => {
        let timeOut = 10000;
        await LoginPage.open();
        await Utils.waitForEnabled(LoginPage.imgLogo, true, timeOut);
        await LoginPage.login(data.user.standard, data.pass);
        await Utils.waitForEnabled(HomePage.lnkCart);
        let isProducts = await HomePage.lblProducts.getText();
        expect(isProducts).to.be.equal('PRODUCTS');
    });
});


