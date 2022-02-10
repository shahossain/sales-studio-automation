"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const rm = __importStar(require("wdio-openfin-service"));
const assert_1 = __importDefault(require("assert"));
describe('Sales Studio Smoke Test', function () {
    const salesStudioTitle = 'OpenFin Sales Workspace Studio';
    const logo = "https://www.nba.com/favicon.ico";
    it('Launch Sales Studio and validate Title', async () => {
        await rm.switchWindowByTitle(salesStudioTitle);
        const title = await browser.getTitle();
        assert_1.default.strictEqual(title, salesStudioTitle);
    });
    it('Select and apply Workspace Logo', async () => {
        const logosTabBtn = await browser.$('//a[@href="logos"]');
        await logosTabBtn.click();
        const searchLogoUrl = await browser.$('//b[contains(text(),"Logo Url")]/../following-sibling::p/input');
        await searchLogoUrl.setValue(logo);
        const addLogoUrlBtn = await browser.$('//button[contains(text(),"Add Logo Url")]');
        await addLogoUrlBtn.click();
    });
    it('Select and apply Workspace Version', async () => {
        const dosTabBtn = await browser.$('//a[@href="dos"]');
        await dosTabBtn.click();
        const selectWSVersion = await browser.$('//select[contains(@class, "selectpicker")]');
        await selectWSVersion.selectByVisibleText('Version 5.5');
        const applyLogo = await browser.$('//img[@src="' + logo + '"]');
        await applyLogo.click();
        const applyChangesBtn = await browser.$('//button[contains(text(), "Apply Changes")]');
        await applyChangesBtn.click();
        const dosJSON = await browser.$('//pre');
        await expect(dosJSON).toHaveTextContaining('"version": "5.5.0"');
        await expect(dosJSON).toHaveTextContaining('"iconUrl": "' + logo + '"');
    });
    it('Create Workspace Platform and apply Custom Theme', async () => {
        const platformsTabBtn = await browser.$('//a[@href="platforms"]');
        await platformsTabBtn.click();
        const newPlatformBtn = await browser.$('//button[contains(text(), "New Platform")]');
        await newPlatformBtn.click();
        const newPlatformName = await browser.$('//p[contains(text(), "Platform Name")]/following-sibling::p[1]/input');
        await newPlatformName.setValue('NBA');
        const savePlatformBtn = await browser.$('//button[contains(text(), "Save Platform")]');
        savePlatformBtn.click();
        const applyLogo = await browser.$('//img[@src="' + logo + '"]');
        await applyLogo.click();
        const customThemeSwitch = await browser.$('//p[contains(text(), "Custom Theme")]/following-sibling::p[1]/select');
        await customThemeSwitch.scrollIntoView();
        await customThemeSwitch.selectByVisibleText('True');
        const searchInspirationUrl = await browser.$('//h5[contains(text(), "Custom Theme")]/following-sibling::p[2]/input');
        await searchInspirationUrl.scrollIntoView();
        await searchInspirationUrl.setValue('https://www.nba.com');
        const getDelyedInspirationBtn = await browser.$('//button[contains(text(), "Get Inspiration Now")]');
        await getDelyedInspirationBtn.click();
        const themeImage = await browser.$('#themeImage');
        await expect(themeImage).toBeDisplayed();
        const paletteColors = await browser.$$('//div[@class ="swatch pointer-cursor"]');
        const backgroundColorInputs = await browser.$$('//b[contains(text(), "Background ")]/../preceding-sibling::td/input');
        for (let i = 0; i < 7; i++) {
            await paletteColors[i].dragAndDrop(backgroundColorInputs[i], 5000);
        }
    });
});
