import { expect, Locator, Page } from "@playwright/test"

export class InventoryPage{

    private readonly ButtonAddCart : Locator
    private readonly ListContainer : Locator

    constructor(page : Page){

        this.ListContainer = page.locator('//*[@class="inventory_container"]//*[@class="inventory_item"]')
        this.ButtonAddCart = page.locator('//*[@id="shopping_cart_container"]')
  
    }

     async ValidateInventory(){
        await expect(this.ListContainer).toBeVisible({ timeout: 5000 })
        const countItems = await this.ListContainer.count()
        expect(countItems).toBeGreaterThan(0)
    }

       async ValidateItemSelect(){
       const ItemsContainer = await this.ListContainer.all()
       const RandomItem = Math.floor(Math.random() * ItemsContainer.length)
       const ItemSelected = ItemsContainer[RandomItem]
       const ButtonAddCart = ItemSelected.getByRole("button", {name : 'Add to cart', exact : true})
       await ButtonAddCart.click()
    }

    async ValidateItemAddCart(){
        await expect(this.ButtonAddCart).toBeVisible({ timeout: 5000 })
        await expect(this.ButtonAddCart).toHaveText('1')
    }
}

