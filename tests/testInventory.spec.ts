import { test, expect } from '@playwright/test';
import { LoginPage } from '../pom/PageObjects/LoginPage';
import { InventoryPage } from '../pom/PageObjects/InventoryPage';
import {URLS,Credentials} from '../pom/Data/Constants'

test.describe('Inventory', () => {
  
  test.beforeEach(async ({ page }) => {
    await page.goto(URLS.URLSauceDemon)
    const Login = new LoginPage(page)
    await Login.loginWithCredential(Credentials.UsernameSauceDemo,Credentials.PasswordSauceDemo)
    await page.waitForURL('**/inventory.html');
  });

  test.afterEach(async ({ page },testINFO) => {
    testINFO.attach('Inventory screenshot', {
      body: await page.screenshot(),
      contentType: 'image/png',
    }); 
  });

  test('Validate inventory charge when page loads', async ({ page }) => {
    const Inventory = new InventoryPage(page)
    await Inventory.ValidateInventoryCharge()
  });

  test('Validate Item Select when Item is Clicked', async ({ page }) => {
    const Inventory = new InventoryPage(page)
    await Inventory.ValidateItemSelect()
  });

  test('Validate Item when Add to Cart', async ({ page }) => {
    const Inventory = new InventoryPage(page)
    await Inventory.ValidateItemSelect()
    await Inventory.ValidateItemAddCart()
  });

});