import{test,expect} from '@playwright/test';

test('homepage loads', async ({ page }) => {
    await page.goto('https://www.roicians.com');

    await expect(page).toHaveTitle(/Roicians/);
}
);
