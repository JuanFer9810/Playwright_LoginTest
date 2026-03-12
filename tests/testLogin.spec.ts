import { test, expect } from '@playwright/test';
import { LoginPage } from '../pom/PageObjects/LoginPage';
import {URLS,Credentials} from '../pom/Data/Constants'


test.describe('Validate Login', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto(URLS.URLSauceDemon)
  });

  test.afterEach(async ({ page },testINFO) => { 
     testINFO.attach('Login screenshot', {
      body: await page.screenshot(),
      contentType: 'image/png',
    }); 
  }); 

  test('Validate Login Success Message With Valid Credentials @smoke', async ({ page }) => {
    const Login = new LoginPage(page)
    await Login.loginWithCredential(Credentials.UsernameSauceDemo,Credentials.PasswordSauceDemo)
    await page.waitForURL('**/inventory.html');
    await Login.ValidateLoginSuccessMessage()
  });

  test('Validate Login Error Message When using Invalid Credentials @smoke', async ({ page }) => {
    const Login = new LoginPage(page)
    await Login.loginWithCredential(Credentials.UsernameSauceDemo,'password_bad')
    await Login.MistakeLoginSuccessMessage()
    });

 });
