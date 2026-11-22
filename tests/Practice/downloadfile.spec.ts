import {test, expect} from '@playwright/test';

test('downloadfile', async ({ page }) => {

    await page.goto('https://roiciansautomationlab.netlify.app/');
    page.getByRole('link', { name: 'File Download' }).click();

    const [download] = await Promise.all([page.waitForEvent('download'),
       
        page.locator('#download-sample-data-csv').click()]);

        expect (download.suggestedFilename()).toBe('sample-data.csv');
   } );
