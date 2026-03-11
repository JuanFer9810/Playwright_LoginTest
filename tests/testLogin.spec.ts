import { test, expect } from '@playwright/test';
import { LoginPage } from '../pom/PageObjects/LoginPage';
import {URLS,Credentials} from '../pom/Data/Constants'

test('test Validate Login Success Message', async ({ page },testINFO) => {
  await page.goto(URLS.URLSauceDemon)
 const Login = new LoginPage(page)
    await Login.loginWithCredential(Credentials.UsernameSauceDemo,Credentials.PasswordSauceDemo)
    // espera explicita
    await page.waitForURL('**/inventory.html');
    await Login.ValidateLoginSuccessMessage()

      // captura que se adjunte al reporte 
    await testINFO.attach('login',{
        body: await page.screenshot(),
        contentType: 'image/png'
    })

});

test('test Mistake Login Success Message', async ({ page },testINFO) => {

  await page.goto(URLS.URLSauceDemon)

 const Login = new LoginPage(page)
    await Login.loginWithCredential(Credentials.UsernameSauceDemo,'password_bad')
    await Login.MistakeLoginSuccessMessage()
    await testINFO.attach('login',{
        body: await page.screenshot(),
        contentType: 'image/png'
    })

});
