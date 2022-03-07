"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const page_1 = __importDefault(require("./page"));
class HomePage extends page_1.default {
    constructor() {
        super(...arguments);
        // Change values to customize Test
        this.searchInputText = "Investments and Models";
        // Methods
        this.searchHomeAndLaunchFirstResult = async () => {
            await this.homeSearchInputField.click();
            await browser.keys("\uE007");
            await this.homeSearchInputField.setValue(this.searchInputText);
            await browser.pause(2000);
            await this.firstSearchResult.click();
            await browser.pause(3000);
        };
    }
    // Home Components 
    get homeSearchInputField() { return browser.$('#search-input'); }
    get firstSearchResult() { return browser.$('//*[@data-testid ="components-homepad-list-item-title"][1]'); }
}
exports.default = new HomePage();
