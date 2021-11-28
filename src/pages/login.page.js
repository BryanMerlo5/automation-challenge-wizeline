const data = require('../data/enum.json');
const Utils = require('../utils/utils');
/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage {
    /**
     * define selectors using getter methods
     */
    get txtUsername() { return $('#user-name');}
    get txtPassword() { return $('#password'); } 
    get lblUsers() { return $('div[id="login_credentials"] br');}
    get lblPassword() { return $('div[class="login_password"]'); } 
    get btnLogin() { return $('#login-button'); }
    get imgLogo() { return $('div[class="login_logo"]'); }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await this.txtUsername.setValue(username);
        await this.txtPassword.setValue(password);
        await this.btnLogin.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
     async open() {
        Utils.openWebPage(data.url, '');
    }
}

module.exports = new LoginPage();
