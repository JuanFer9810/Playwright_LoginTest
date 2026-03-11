import { expect, Locator, Page } from "@playwright/test"

export class CartBodgePage{

    private readonly ItemName : Locator

       constructor(page : Page){

        this.ItemName = page.locator('//*[@class="inventory_item_name"]')
  
    }

    async ValidateItemCart(ItemSelect : string ){
        await expect(this.ItemName).toBeVisible({ timeout: 5000 })
        await expect(this.ItemName).toHaveText(ItemSelect)
    }

}