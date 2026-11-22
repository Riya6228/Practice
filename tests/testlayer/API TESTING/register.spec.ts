import { test, expect, request } from '@playwright/test';

test ('Registert Customer', async ({ request }) => {  //fixture(page) is used to create a new browser context
    //, request it can be used to make API calls
      const response = await request.post('https://banklite.onrender.com/api/auth/register', {
          data: {

            full_name: 'Playwright student',
            email: 'student' + Date.now() + '@gmail.com',
            password: 'password123'
          }
      });
      console.log('Status:', response.status());
      expect(response.status()).toBe(201);
});