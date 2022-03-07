"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const page_1 = __importDefault(require("./page"));
class BrowserPage extends page_1.default {
    constructor() {
        super(...arguments);
        // Change values to customize Test
        this.savePageModalTitle = "Browser Save Page Popup";
        this.savePageName = "Regression Test Page";
        // Methods
        this.savePage = async () => {
            await this.savePageModalButton.click();
            await this.savePageNameInputField.setValue(this.savePageName);
            await this.savePageNameConfirm.click();
        };
    }
    // Browser Components 
    get savePageModalButton() { return browser.$('//button[@title="Save Page"]'); }
    get savePageNameInputField() { return browser.$('//input[@name="title"]'); }
    get savePageNameConfirm() { return browser.$('//button[@type="submit"]'); }
}
exports.default = new BrowserPage();
