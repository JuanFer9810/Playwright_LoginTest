import { test, expect } from '@playwright/test';
import { LoginPage } from './PageObjects/LoginPage';

test('testLogin', async ({ page }) => {
  await page.goto(process.env.URL)
  //await page.goto('https://www.saucedemo.com/');

 const Login = new LoginPage(page)
    await Login.loginWithCredential('standard_user','secret_sauce')
    await page.pause()
});
