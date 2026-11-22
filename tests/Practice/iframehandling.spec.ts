import{test, expect} from '@playwright/test';

test('iframe handling', async ({ page }) => {
    await page.goto('https://roiciansautomationlab.netlify.app/');
    await page.getByRole('link', {name: 'Frames / iFrame'}).click();
    const frame=page.frameLocator('#lab-iframe');
    await frame.locator('#iframe-name').fill('Playwright');
    await frame.locator('#iframe-email').fill('riyad@gmail.com');
    
});

