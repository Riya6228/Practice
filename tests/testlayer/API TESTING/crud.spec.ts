import { test, expect,request } from '@playwright/test';

test('CRUD API test', async ({ request }) => {
    const response = await request.get('https://banklite.onrender.com/');
    console.log('Status:', response.status());
    expect(response.status()).toBe(200);

});