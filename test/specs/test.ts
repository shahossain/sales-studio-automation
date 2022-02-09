import * as rm  from 'wdio-openfin-service';
import assert from 'assert'
import { Expect } from 'expect-webdriverio'

declare var fin:any;
declare var browser:any;

describe('Sales Studio Smoke Test', function() {

    const salesStudioTitle = 'OpenFin Sales Workspace Studio';

    it('Launch Sales Studio and validate Title',async () => {
        await rm.switchWindowByTitle(salesStudioTitle);
        const title = await browser.getTitle();
        assert.strictEqual(title, salesStudioTitle);
    })

    it('Select and apply Workspace Version',async () => {
        const dosTabButton = await browser.$('//a[@href="dos"]');
        await dosTabButton.click();

        const selectWorkspaceVersion = await browser.$('//select[contains(@class, "selectpicker")]');
        await selectWorkspaceVersion.selectByVisibleText('Version 5.5');

        const applyChangesButton = await browser.$('//button[contains(text(), "Apply Changes")]');
        await applyChangesButton.click();

        const dosJSON = await browser.$('//pre')
        await expect(dosJSON).toHaveTextContaining('version": "5.5.0"')
    })
})

