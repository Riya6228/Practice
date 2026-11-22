import {test, expect} from '@playwright/test';

test('hover', async ({ page }) => {
    await page.goto('https://roiciansautomationlab.netlify.app/');
    await page.getByRole('link', { name: 'Hovers' }).click();
    await page.locator('#user-1').hover();
    await expect(page.locator('#tooltip-1')).toContainText('user1 — QA Engineer');
});
