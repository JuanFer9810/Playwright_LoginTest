import { expect, Locator, Page } from "@playwright/test"

export class CartBodgePage{

    private readonly ItemName : Locator
    private readonly ButtonCheckout : Locator

       constructor(page : Page){

        this.ItemName = page.locator('//*[@class="inventory_item_name"]')
        this.ButtonCheckout = page.getByRole('button', { name: 'Checkout' })
        
    }   

    async ValidateCorrectItemCart(ItemSelect : string ){
        await expect(this.ItemName).toBeVisible({ timeout: 5000 })
        await expect(this.ItemName).toHaveText(ItemSelect)
    }

     async ValidateButtonCheckout(){
        await expect(this.ButtonCheckout).toBeVisible({ timeout: 5000 })
        await this.ButtonCheckout.click()
    }

}