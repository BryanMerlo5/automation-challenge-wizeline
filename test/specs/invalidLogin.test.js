const LoginPage = require('../../src/pages/login.page');
const HomePage = require('../../src/pages/home.page');
const data = require('../../src/data/enum.json');
const Utils = require('../../src/utils/utils');
const expect = require('chai').expect;

describe('My Login application', () => {
    it('Should be displayed an error message with invalid credentials', async () => {
        let timeOut = 10000;
        let products = 'PRODUCTS';
        await LoginPage.open();
        await Utils.waitForEnabled(LoginPage.imgLogo, true, timeOut);
        await LoginPage.login(data.user.invalid, data.pass);
        // Validate error message is displayed
        const isErrorDisplayed = await Utils.isDisplayed(LoginPage.lblErrorInvalidUser);
        expect(isErrorDisplayed).to.be.equal(true);
    });
});


