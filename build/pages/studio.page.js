"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const page_1 = __importDefault(require("./page"));
class StudioPage extends page_1.default {
    constructor() {
        super(...arguments);
        // Change values to customize test
        this.workspaceVersion = "Version 6.0";
        this.workspaceDOSVersion = "6.0.0";
        this.logo = "https://www.facebook.com/favicon.ico";
        this.iconUrl = this.logo;
        this.platformName = 'My Custom Platform';
        this.homeName = 'My Custom Home';
        this.storeName = 'My Custom Store';
        // Methods 
        this.createNewPlatform = async () => {
            await this.platformsTabBtn.click();
            await this.newPlatformBtn.click();
            await this.newPlatformName.setValue(this.platformName);
            await this.newHomeName.setValue(this.homeName);
            await this.newStoreName.setValue(this.storeName);
            await this.applyPlatformLogo.click();
            await this.savePlatformBtn.click();
        };
        this.selectAndApplyLogo = async () => {
            await this.logoTabBtn.click();
            await this.searchLogoUrl.setValue(this.logo);
            await this.addLogoUrlBtn.click();
        };
        this.selectAndApplyWorkspaceVersion = async () => {
            await this.dosTabBtn.click();
            await this.selectWSVersion.selectByVisibleText(this.workspaceVersion);
            await this.applyLogo.click();
            await this.applyChangesBtn.click();
            await expect(this.dosJSON).toHaveTextContaining(this.workspaceDOSVersion);
            await expect(this.dosJSON).toHaveTextContaining(this.iconUrl);
        };
        this.launchCustomPlatform = async () => {
            await this.launchTabBtn.click();
            await this.launchPlatform.click();
        };
    }
    // Logo Tab Components
    get logoTabBtn() { return browser.$('//a[@href="logos"]'); }
    get searchLogoUrl() { return browser.$('//b[contains(text(),"Logo Url")]/../following-sibling::p/input'); }
    get addLogoUrlBtn() { return browser.$('//button[contains(text(),"Add Logo Url")]'); }
    // DOS Tab Components
    get dosTabBtn() { return browser.$('//a[@href="dos"]'); }
    get selectWSVersion() { return browser.$('//select[contains(@class, "selectpicker")]'); }
    get applyLogo() { return browser.$('//img[@src="' + this.logo + '"]'); }
    get applyChangesBtn() { return browser.$('//button[contains(text(), "Apply Changes")]'); }
    get dosJSON() { return browser.$('//pre'); }
    //  Platforms Tab Components
    get platformsTabBtn() { return browser.$('//a[@href="platforms"]'); }
    get newPlatformBtn() { return browser.$('//button[contains(text(), "New Platform")]'); }
    get newPlatformName() { return browser.$('//p[contains(text(), "Platform Name")]/following-sibling::p[1]/input'); }
    get newHomeName() { return browser.$('//p[contains(text(), "Home Name")]/following-sibling::p[1]/input'); }
    get newStoreName() { return browser.$('//p[contains(text(), "Store Name")]/following-sibling::p[1]/input'); }
    get savePlatformBtn() { return browser.$('//button[contains(text(), "Save Platform")]'); }
    get applyPlatformLogo() { return browser.$('//img[@src="' + this.logo + '"]'); }
    get customThemeFlag() { return browser.$('//p[contains(text(), "Custom Theme")]/following-sibling::p[1]/select'); }
    // Launch Tab Components
    get launchTabBtn() { return browser.$('//a[@href="launch"]'); }
    get launchPlatform() { return browser.$('//img[contains(@src, "' + this.logo + '")]/preceding-sibling::button[contains(text(), "Launch")]'); }
}
exports.default = new StudioPage();
