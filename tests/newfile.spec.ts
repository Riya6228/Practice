import{test,expect} from '@playwright/test';

test('homepage loads', async ({ page }) => {
    await page.goto('https://www.roicians.com');

    await expect(page).toHaveTitle(/Roicians/);
    await page.pause();
}
);


test('Verify Roicians Homepage by role navigation', async ({ page }) => {

    await page.goto('https://www.roicians.com');

    const aboutUs = page.getByRole('link', { name: 'About Us' });

    console.log('Number of About Us elements:', await aboutUs.count());

    await page.pause();

    await aboutUs.first().click();

});

