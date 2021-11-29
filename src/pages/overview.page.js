const data = require('../data/enum.json');
/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
class OverviewPage {
    /**
     * define selectors using getter methods
     */
    get btnFinish() { return $('#finish');}
    get btnCancel() { return $('#cancel');}
    get lblSubtotal() { return $('//*[contains(text(), "$") and @class="summary_subtotal_label"]');}
    get lblSummaryTax() { return $('//*[contains(text(), "$") and @class="summary_tax_label"]');}
    get lblSummaryTotal() { return $('//*[contains(text(), "$") and @class="summary_total_label"]');}

    /**
     * a method to get if Subtotal is existing
     * e.g. true
     */
    async waitToSubtotalExist () {
        return await utils.waitForExist(this.lblSubtotal, true, 5000);
    }

    /**
     * a method to get if total is existing
     * e.g. true
     */
    async waitToTotalExist () {
        return await utils.waitForExist(this.lblSummaryTotal, true, 5000);
    }

    /**
     * a method to get if tax is existing
     * e.g. true
     */
    async waitToTaxExist () {
        return await utils.waitForExist(this.lblSummaryTax, true, 5000);
    }

}

module.exports = new OverviewPage();