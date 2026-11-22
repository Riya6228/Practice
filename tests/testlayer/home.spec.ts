import { test } from '@playwright/test';
import { HomePage } from '../../pom/Homepage';
import { testdata } from '../datalayer/data';

test('verify homepage', async ({page}) => {
    const homePage = new HomePage(page);
    await homePage.openHomePage();
    await homePage.searchForProduct(testdata.Searchproduct);
});
