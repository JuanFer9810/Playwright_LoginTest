import { test, expect } from '@playwright/test';
import { LoginPage } from '../pom/PageObjects/LoginPage';
import {URLS,Credentials} from '../pom/Data/Constants'

test('test Login User good', async ({ page },testINFO) => {
  await page.goto(URLS.URLSauceDemon)
 const Login = new LoginPage(page)
    await Login.loginWithCredential(Credentials.UsernameSauceDemo,Credentials.PasswordSauceDemo)
    await Login.ValidateLoginSuccessMessage()

      // captura que se adjunte al reporte 
    await testINFO.attach('login',{
        body: await page.screenshot(),
        contentType: 'image/png'
    })

});

test('test Login User bad', async ({ page },testINFO) => {
  //await page.goto(process.env.URL)
  await page.goto('https://www.saucedemo.com/');

 const Login = new LoginPage(page)
    await Login.loginWithCredential('standard_user','password_bad')
    await Login.MistakeLoginSuccessMessage()
    await testINFO.attach('login',{
        body: await page.screenshot(),
        contentType: 'image/png'
    })

});
