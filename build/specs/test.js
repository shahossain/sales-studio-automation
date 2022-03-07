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
const home_page_1 = __importDefault(require("../pages/home.page"));
const browser_page_1 = __importDefault(require("../pages/browser.page"));
describe('Sales Studio Smoke Test: Studio', function () {
    const salesStudioTitle = 'OpenFin Sales Workspace Studio';
    it('Launch Sales Studio and validate Title', async () => {
        await rm.switchWindowByTitle(salesStudioTitle);
        const studioTitle = await browser.getTitle();
        assert_1.default.strictEqual(studioTitle, salesStudioTitle);
    });
    it('Select and apply Workspace Logo', async () => {
        await studio_page_1.default.selectAndApplyLogo();
    });
    it('Select and apply Workspace Version', async () => {
        await studio_page_1.default.selectAndApplyWorkspaceVersion();
    });
    ;
    it('Create Workspace Platform with default Theme', async () => {
        await studio_page_1.default.createNewPlatform();
    });
    it('Launch the Custom Platform', async () => {
        await studio_page_1.default.launchCustomPlatform();
        await browser.pause(7000);
    });
});
describe('Sales Studio Smoke Test: Home', function () {
    const customHomeTitle = 'OpenFin Home';
    it('Validate Home Title', async () => {
        await rm.switchWindowByTitle(customHomeTitle);
        const homeTitle = await browser.getTitle();
        assert_1.default.strictEqual(homeTitle, customHomeTitle);
    });
    it('Search for App and Launch', async () => {
        await home_page_1.default.searchHomeAndLaunchFirstResult();
    });
});
describe('Sales Studio Smoke Test: Browser', function () {
    const customBrowserTitle = 'Browser Starter';
    it('Validate Browser Title', async () => {
        await rm.switchWindowByTitle(customBrowserTitle);
        const browserTitle = await browser.getTitle();
        assert_1.default.strictEqual(browserTitle, customBrowserTitle);
    });
    it('Save Page to Home', async () => {
        await rm.switchWindowByTitle(browser_page_1.default.savePageModalTitle);
        await browser_page_1.default.savePage();
    });
});
