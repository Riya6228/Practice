import { test, expect } from '@playwright/test';

test('Verify Roicians home page loads', async ({ page }) => {
  await page.goto('https://www.roicians.com');
  await expect(page).toHaveTitle(/Roicians/);
});

test('Verify Roicians home page title', async ({ page }) => {
  await page.goto('https://www.roicians.com');
  await expect(page).toHaveTitle(/Roicians/);
});