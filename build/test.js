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
    it('Launch Sales Studio and validate Title', async () => {
        await rm.switchWindowByTitle(salesStudioTitle);
        const title = await browser.getTitle();
        assert_1.default.strictEqual(title, salesStudioTitle);
    });
    it('Select and apply Workspace Version', async () => {
        const dosTabButton = await browser.$('//a[@href="dos"]');
        await dosTabButton.click();
        const selectWorkspaceVersion = await browser.$('//select[contains(@class, "selectpicker")]');
        await selectWorkspaceVersion.selectByVisibleText('Version 5.5');
        const applyChangesButton = await browser.$('//button[contains(text(), "Apply Changes")]');
        await applyChangesButton.click();
        const dosJSON = await browser.$('//pre');
        await expect(dosJSON).toHaveTextContaining('version": "5.5.0"');
    });
});
