import{test, expect} from '@playwright/test';
test('handle multiple windows', async ({ page,context }) => {

    await page.goto('https://roiciansautomationlab.netlify.app/');
    //google tab
    const googlePage = await context.newPage();
    await googlePage.goto('https://www.google.com/');

    //playwright tab
    const playwrightPage = await context.newPage();
    await playwrightPage.goto('https://playwright.dev/');

    const roiciansPage = await context.newPage();
    await roiciansPage.goto('https://www.roicians.com/');

    console.log('GoogletTitle:',await googlePage.title());
    console.log('PlaywrightTitle:',await playwrightPage.title());
    console.log('RoiciansTitle:',await roiciansPage.title());
    await roiciansPage.bringToFront();
});
