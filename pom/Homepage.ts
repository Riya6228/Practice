import { Locator, Page } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly searchInput: Locator;
  readonly searchButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchInput = page.locator('#site-search-input');
    this.searchButton = page.getByTestId('header-search-submit');
  }

  async openHomePage() {
    await this.page.goto('https://shop-look.vercel.app/');
  }

  async searchForProduct(product: string) {
    await this.searchInput.fill(product);
    await this.searchButton.click();
  }
}