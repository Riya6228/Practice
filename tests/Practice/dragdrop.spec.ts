import {test, expect} from '@playwright/test';
test('draganddrop', async ({ page }) => {
    await page.goto('https://roiciansautomationlab.netlify.app/');
    await page.getByRole('link', { name: 'Drag and Drop' }).click();
    await page.locator('#draggable-1').dragTo(page.locator('#drop-hint'))
    await expect(page.locator('#dropped-draggable-1')).toContainText(' Playwright');
   // await page.close();
});