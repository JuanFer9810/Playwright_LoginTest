import { test, expect } from '@playwright/test';
import { LoginPage } from '../pom/PageObjects/LoginPage';
import { InventoryPage } from '../pom/PageObjects/InventoryPage';
import { CartBodgePage } from '../pom/PageObjects/CartBodgePage';
import { CheckoutInformationPage } from '../pom/PageObjects/CheckoutInformationPage';
import { CheckoutOverviewPage } from '../pom/PageObjects/CheckoutOverviewPage';
import { CheckoutCompletePage } from '../pom/PageObjects/CheckoutCompletePage';
import {URLS,Credentials,UserInformation} from '../pom/Data/Constants'

test.describe('Checkout', () => {

  test.beforeEach(async ({ page }) => {
   await page.goto(URLS.URLSauceDemon)
  });

  test.afterEach(async ({ page },testINFO) => {
    await testINFO.attach('Checkout Information',{
      body: await page.screenshot(),
      contentType: 'image/png'
    })
  });

  test('Validate Entry Checkout Information', async ({ page }) => {
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
    const CheckoutInformation = new CheckoutInformationPage(page)
      await CheckoutInformation.ValidateCheckoutInformation(UserInformation.FirstName,UserInformation.LastName,UserInformation.PostalCode)
      await page.waitForURL('**/checkout-step-two.html'); 
  });

  test('Validate Information Item Checkout Overview', async ({ page },testINFO) => {
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
    const CheckoutInformation = new CheckoutInformationPage(page)
      await CheckoutInformation.ValidateCheckoutInformation(UserInformation.FirstName,UserInformation.LastName,UserInformation.PostalCode)
      await page.waitForURL('**/checkout-step-two.html'); 
    const CheckoutOverview = new CheckoutOverviewPage(page)
      await CheckoutOverview.ValidatePriceInformation(ItemSelect)
      await page.waitForURL('**/checkout-complete.html');
  });
       
  test('Validate Checkout Complete', async ({ page },testINFO) => {
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
    const CheckoutInformation = new CheckoutInformationPage(page)
      await CheckoutInformation.ValidateCheckoutInformation(UserInformation.FirstName,UserInformation.LastName,UserInformation.PostalCode)
      await page.waitForURL('**/checkout-step-two.html'); 
    const CheckoutOverview = new CheckoutOverviewPage(page)
      await CheckoutOverview.ValidatePriceInformation(ItemSelect)
      await page.waitForURL('**/checkout-complete.html');
    const CheckoutComplete = new CheckoutCompletePage(page)
      await CheckoutComplete.ValidateBuyComplete()
      await page.waitForURL('**/inventory.html');
  });

 });