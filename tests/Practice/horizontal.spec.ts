import {test, expect} from '@playwright/test';
test('slider', async ({ page }) => {
    await page.goto('https://roiciansautomationlab.netlify.app/');
    await page.getByRole('link', { name: 'Horizontal Slider' }).click();
    await expect(page.locator('#slider')).toHaveValue('5');
    //change value
    await page.locator('#slider').fill('7.5');
});