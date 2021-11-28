class Utils {
    /**
    * Opens a sub page of the page
    * @param url url of the website (e.g. www.google.com/)
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    async openWebPage (url, path) {
        return browser.url(`${url}${path}`);
    }

    /**
    * Waits until the element is displayed
    * @param selector selector, JS Function, or Matcher object to fetch a certain element
    * @param falseCase if true it waits for the opposite (default: false)
    * @param timeOut time in ms
    */
    async waitForEnabled (selector, falseCase, timeOut) {
        const ms = timeOut;
        // selector could be a string or a getter
        if (typeof selector === 'string' || selector instanceof String)
            return await $(selector).waitForDisplayed(ms, !!falseCase);
        else
            return await selector.waitForDisplayed(ms, !!falseCase);
    };

    /**
    * Waits until the element is displayed
    * @param selector selector, JS Function, or Matcher object to fetch a certain element
    * @param falseCase if true it waits for the opposite (default: false)
    * @param timeOut time in ms
    */
    async isDisplayed (selector) {
        // selector could be a string or a getter
        if (typeof selector === 'string' || selector instanceof String){
            return await $(selector).isDisplayed();
        } else {
            return await selector.isDisplayed();
        }
    };
}

module.exports = new Utils();