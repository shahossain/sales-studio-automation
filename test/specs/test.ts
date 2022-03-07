import * as rm from 'wdio-openfin-service'
import assert from 'assert'
import {  } from "expect-webdriverio"; 
import Studio from '../pages/studio.page'
import Home from '../pages/home.page'
import Browser from '../pages/browser.page'

declare var fin:any;
declare var browser:any;

describe('Sales Studio Smoke Test: Studio', function() {
    
     const salesStudioTitle = 'OpenFin Sales Workspace Studio';

    it('Launch Sales Studio and validate Title', async () => {
        await rm.switchWindowByTitle(salesStudioTitle);
        const studioTitle = await browser.getTitle();
        assert.strictEqual(studioTitle, salesStudioTitle);
    });

    it('Select and apply Workspace Logo', async () => {
        await Studio.selectAndApplyLogo();
    });

    it('Select and apply Workspace Version', async () => {
        await Studio.selectAndApplyWorkspaceVersion();
    });;

    it('Create Workspace Platform with default Theme', async () => {
        await Studio.createNewPlatform();
    });

    it('Launch the Custom Platform', async () => {
        await Studio.launchCustomPlatform();
        await browser.pause(7000);
    });

})

describe('Sales Studio Smoke Test: Home', function() {

    const customHomeTitle = 'OpenFin Home';

    it('Validate Home Title', async () => {
        await rm.switchWindowByTitle(customHomeTitle);
        const homeTitle = await browser.getTitle();
        assert.strictEqual(homeTitle, customHomeTitle);
    });

    it('Search for App and Launch', async () => {
        await Home.searchHomeAndLaunchFirstResult();
    });

})

describe('Sales Studio Smoke Test: Browser', function() {

    const customBrowserTitle = 'Browser Starter';

    it('Validate Browser Title', async () => {
        await rm.switchWindowByTitle(customBrowserTitle);
        const browserTitle = await browser.getTitle();
        assert.strictEqual(browserTitle, customBrowserTitle);
    });

    it('Save Page to Home', async () => {
        await rm.switchWindowByTitle(Browser.savePageModalTitle);
        await Browser.savePage();

    });

})
