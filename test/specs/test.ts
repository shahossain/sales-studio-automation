import * as rm  from 'wdio-openfin-service';
import assert from 'assert'
import {  } from "expect-webdriverio"; 
import Studio from '../pages/studio.page'

declare var fin:any;
declare var browser:any;

describe('Sales Studio Smoke Test', function() {

    const salesStudioTitle = 'OpenFin Sales Workspace Studio';

    it('Launch Sales Studio and validate Title',async () => {
        await rm.switchWindowByTitle(salesStudioTitle);
        const title = await browser.getTitle();
        assert.strictEqual(title, salesStudioTitle);
    })

    it('Select and apply Workspace Logo', async () => {
        await Studio.logoTabBtn.click();
        
        await Studio.searchLogoUrl.setValue(Studio.logo);
        await Studio.addLogoUrlBtn.click();
    })

    it('Select and apply Workspace Version', async () => {
        await Studio.dosTabBtn.click();
        
        await Studio.selectWSVersion.selectByVisibleText(Studio.workspaceVersion);    
        await Studio.applyLogo.click();
        
        await Studio.applyChangesBtn.click();

        await expect(Studio.dosJSON).toHaveTextContaining(Studio.workspaceDOSVersion);
        await expect(Studio.dosJSON).toHaveTextContaining(Studio.iconUrl);
    })

    it('Create Workspace Platform and apply Custom Theme', async () => {
        await Studio.platformsTabBtn.click();
        await Studio.newPlatformBtn.click();
        
        await Studio.newPlatformName.setValue(Studio.platformName);
        await Studio.newHomeName.setValue(Studio.homeName);
        await Studio.newStoreName.setValue(Studio.storeName);        
        await Studio.applyPlatformLogo.click();

        await Studio.savePlatformBtn.click();
    })

    it('Launch the Custom Platform', async () => {
        await Studio.launchTabBtn.click();
        await Studio.launchPlatform.click();
    })

})

