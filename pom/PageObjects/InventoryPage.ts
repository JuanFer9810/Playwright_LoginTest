import { expect, Locator, Page } from "@playwright/test"

export class InventoryPage{

    private readonly ButtonAddCart : Locator
    private readonly ListContainer : Locator

    constructor(page : Page){

        this.ListContainer = page.locator('//*[@class="inventory_container"]//*[@class="inventory_item"]')
        this.ButtonAddCart = page.getByRole("button", {name : 'Add to cart', exact : true})
  
    }

     async ValidateInventory(){
        await this.ListContainer.first().waitFor({ state: 'visible' })
        const countItems = await this.ListContainer.count()
        expect(countItems).toBeGreaterThan(0)
    }


  async ClickButtonAddCart(){
        await this.ButtonAddCart.click()
    }

}

