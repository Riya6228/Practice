import {test,expect} from '@playwright/test';

test.describe('testing screenshot', () => {
    test('take screenshot', async ({ page }) => {
        await page.goto('https://shop-look.vercel.app/');
        await page.screenshot({ path: 'screenshots/homepage-full.png', fullPage: true });
    });
});
test('screenshot of one product', async ({ page }) => {
     await page.goto('https://shop-look.vercel.app/category/electronics');
   await page.getByTestId('product-card').first().screenshot({ path: 'screenshots/product-card.png' });
});

test('visual regression testing', async ({ page }) => {
    await page.goto('https://shop-look.vercel.app/');
    await expect(page).toHaveScreenshot('screenshots/homepage-full.png', {maxDiffPixelRatio: 0.06 });

});
