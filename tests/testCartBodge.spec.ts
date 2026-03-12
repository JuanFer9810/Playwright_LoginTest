import { test, expect } from '@playwright/test';
import { LoginPage } from '../pom/PageObjects/LoginPage';
import { InventoryPage } from '../pom/PageObjects/InventoryPage';
import { CartBodgePage } from '../pom/PageObjects/CartBodgePage';
import {URLS,Credentials} from '../pom/Data/Constants'

test.describe('CartBodege', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto(URLS.URLSauceDemon)
  });

  test.afterEach(async ({ page }, testINFO) => {
    await testINFO.attach('CartDobge',{
      body: await page.screenshot(),
      contentType: 'image/png'
    })
  });

  test('Validate Correct Item CartBodge', async ({ page }) => {
    const Login = new LoginPage(page)
    await Login.loginWithCredential(Credentials.UsernameSauceDemo,Credentials.PasswordSauceDemo)
    await page.waitForURL('**/inventory.html');
    const Inventory = new InventoryPage(page)
    const ItemSelect = await Inventory.ValidateItemSelect()
    await page.locator('//*[@id="shopping_cart_container"]').click()
    await page.waitForURL('**/cart.html');
    const ItemName = new CartBodgePage(page)
     await ItemName.ValidateCorrectItemCart(ItemSelect)
  });

  test('Validate CartBodge to Checkout', async ({ page }) => {
    const Login = new LoginPage(page)
    await Login.loginWithCredential(Credentials.UsernameSauceDemo,Credentials.PasswordSauceDemo)
    await page.waitForURL('**/inventory.html');
    const Inventory = new InventoryPage(page)
    const ItemSelect = await Inventory.ValidateItemSelect()
    await page.locator('//*[@id="shopping_cart_container"]').click()
    await page.waitForURL('**/cart.html');
    const ItemFinish = new CartBodgePage(page)
    await ItemFinish.ValidateCorrectItemCart(ItemSelect)
    ItemFinish.ValidateButtonCheckout()
    await page.waitForURL('**/checkout-step-one.html');
  });

});