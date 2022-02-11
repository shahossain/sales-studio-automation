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
const studio_page_1 = __importDefault(require("../pages/studio.page"));
describe('Sales Studio Smoke Test', function () {
    const salesStudioTitle = 'OpenFin Sales Workspace Studio';
    it('Launch Sales Studio and validate Title', async () => {
        await rm.switchWindowByTitle(salesStudioTitle);
        const title = await browser.getTitle();
        assert_1.default.strictEqual(title, salesStudioTitle);
    });
    it('Select and apply Workspace Logo', async () => {
        await studio_page_1.default.logoTabBtn.click();
        await studio_page_1.default.searchLogoUrl.setValue(studio_page_1.default.logo);
        await studio_page_1.default.addLogoUrlBtn.click();
    });
    it('Select and apply Workspace Version', async () => {
        await studio_page_1.default.dosTabBtn.click();
        await studio_page_1.default.selectWSVersion.selectByVisibleText(studio_page_1.default.workspaceVersion);
        await studio_page_1.default.applyLogo.click();
        await studio_page_1.default.applyChangesBtn.click();
        await expect(studio_page_1.default.dosJSON).toHaveTextContaining(studio_page_1.default.workspaceDOSVersion);
        await expect(studio_page_1.default.dosJSON).toHaveTextContaining(studio_page_1.default.iconUrl);
    });
    it('Create Workspace Platform and apply Custom Theme', async () => {
        await studio_page_1.default.platformsTabBtn.click();
        await studio_page_1.default.newPlatformBtn.click();
        await studio_page_1.default.newPlatformName.setValue(studio_page_1.default.platformName);
        await studio_page_1.default.newHomeName.setValue(studio_page_1.default.homeName);
        await studio_page_1.default.newStoreName.setValue(studio_page_1.default.storeName);
        await studio_page_1.default.applyPlatformLogo.click();
        await studio_page_1.default.savePlatformBtn.click();
    });
    it('Launch the Custom Platform', async () => {
        await studio_page_1.default.launchTabBtn.click();
        await studio_page_1.default.launchPlatform.click();
    });
});
