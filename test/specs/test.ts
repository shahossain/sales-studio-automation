import * as rm  from 'wdio-openfin-service';
import assert from 'assert'

declare var fin:any;
declare var browser:any;

describe('Launch Sales Studio', function() {

    const salesStudioTitle = 'OpenFin Sales Workspace Studio';

    it('Validate ${salesStudioTitle}',async () => {
        await rm.switchWindowByTitle(salesStudioTitle);
        const title = await browser.getTitle();
        assert.strictEqual(title, salesStudioTitle);
    })
})

