import { test, expect } from '@playwright/test';
import { LoginPage } from '../pom/PageObjects/LoginPage';
import { InventoryPage } from '../pom/PageObjects/InventoryPage';
import {URLS,Credentials} from '../pom/Data/Constants'

test('test Validate Inventory', async ({ page },testINFO) => {
  await page.goto(URLS.URLSauceDemon)
 
  const Login = new LoginPage(page)
    await Login.loginWithCredential(Credentials.UsernameSauceDemo,Credentials.PasswordSauceDemo)
    await page.waitForURL('**/inventory.html');

    const Inventory = new InventoryPage(page)
    await Inventory.ValidateInventory()

  await testINFO.attach('Inventory',{
        body: await page.screenshot(),
        contentType: 'image/png'
    })
});

test('test Validate Item Select', async ({ page },testINFO) => {
  await page.goto(URLS.URLSauceDemon)

  const Login = new LoginPage(page)
    await Login.loginWithCredential(Credentials.UsernameSauceDemo,Credentials.PasswordSauceDemo)
    await page.waitForURL('**/inventory.html');

  const Inventory = new InventoryPage(page)
    await Inventory.ValidateItemSelect()
    await Inventory.ValidateItemAddCart()

      // captura que se adjunte al reporte 
    await testINFO.attach('ItemSelect',{
        body: await page.screenshot(),
        contentType: 'image/png'
    })

});


test('test Validate Item Add to Cart', async ({ page },testINFO) => {
    await page.goto(URLS.URLSauceDemon)

  const Login = new LoginPage(page)
    await Login.loginWithCredential(Credentials.UsernameSauceDemo,Credentials.PasswordSauceDemo)
    await page.waitForURL('**/inventory.html');

  const Inventory = new InventoryPage(page)
    await Inventory.ValidateItemSelect()

    
      // captura que se adjunte al reporte 
    await testINFO.attach('ItemSelect to Cart',{
        body: await page.screenshot(),
        contentType: 'image/png'
    })
});