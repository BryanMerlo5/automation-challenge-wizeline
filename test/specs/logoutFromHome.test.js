const LoginPage = require('../../src/pages/login.page');
const HomePage = require('../../src/pages/home.page');
const data = require('../../src/data/enum.json');
const Utils = require('../../src/utils/utils');
const expect = require('chai').expect;

describe('My application', () => {
    it('Should logout successfully from Home page', async () => {
        let timeOut = 10000;
        await LoginPage.open();
        await Utils.waitForEnabled(LoginPage.imgLogo, true, timeOut);
        await LoginPage.login(data.user.standard, data.pass);
        await Utils.waitForEnabled(HomePage.lnkCart);
        await Utils.waitForEnabled(HomePage.lblProducts);
        await HomePage.logout();
        // Validate the user navigates to the login page.
        const isLoginDisplayed = await Utils.isDisplayed(LoginPage.btnLogin);
        expect(isLoginDisplayed).to.be.equal(true);
    });
});


