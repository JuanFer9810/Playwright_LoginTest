import { test, expect } from '@playwright/test';
import { LoginPage } from './PageObjects/LoginPage';

test('testLoginUsergood', async ({ page },testINFO) => {
  //await page.goto(process.env.URL)
  await page.goto('https://www.saucedemo.com/');

 const Login = new LoginPage(page)
    await Login.loginWithCredential('standard_user','secret_sauce')
    await Login.CheckLoginSucces()

      // captura que se adjunte al reporte 
    await testINFO.attach('login',{
        body: await page.screenshot(),
        contentType: 'image/png'
    })

});

test('testLoginUserbad', async ({ page },testINFO) => {
  //await page.goto(process.env.URL)
  await page.goto('https://www.saucedemo.com/');

 const Login = new LoginPage(page)
    await Login.loginWithCredential('standard_user','password_bad')
    await Login.CheckLoginDefeat()

      // captura que se adjunte al reporte 
    await testINFO.attach('login',{
        body: await page.screenshot(),
        contentType: 'image/png'
    })

});
