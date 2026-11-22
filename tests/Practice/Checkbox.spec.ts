import {test,expect} from '@playwright/test'; 

 
test.describe('Checkboxes', () => {
test ('verifying checkboxes', async({page}) => { 
    
 

   await page.goto("https://roiciansautomationlab.netlify.app/") ; 

 

   await page.getByRole('link', {name: 'Checkboxes'}).click(); 

   await expect(page.locator('#checkbox-2')).toBeChecked(); 
});

test('click on other checkbox', async({page}) => {
    await page.goto("https://roiciansautomationlab.netlify.app/") ;
    await page.getByRole('link', {name: 'Checkboxes'}).click();
   await page.locator('#checkbox-1').check(); 

   await expect(page.locator('#checkbox-1')).toBeChecked(); 

 

//await page.close(); 


}) ;
});