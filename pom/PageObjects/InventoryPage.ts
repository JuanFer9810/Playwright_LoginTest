import { expect, Locator, Page } from "@playwright/test"

export class InventoryPage{

    private readonly ButtonAddCart : Locator
    private readonly ListContainer : Locator
    private readonly ButtonCartDodge : Locator

    constructor(page : Page){
        this.ListContainer = page.locator('//*[@class="inventory_container"]//*[@class="inventory_item"]')
        this.ButtonAddCart = page.locator('.btn_inventory')
        this.ButtonCartDodge = page.locator('//*[@id="shopping_cart_container"]')
    }
    
    async ValidateInventoryCharge(){
        const countItems = await this.ListContainer.count()
        expect(countItems).toBeGreaterThan(0)
    }

    async ValidateItemSelect(){
        const ItemsContainer = await this.ListContainer.all()
        const RandomItem = Math.floor(Math.random() * ItemsContainer.length)
        const ItemSelected = ItemsContainer[RandomItem]
        await this.ButtonAddCart.locator(`nth=${RandomItem}`).click()
        await expect(this.ButtonAddCart.locator(`nth=${RandomItem}`)).toHaveText('Remove')
        const ItemName = await ItemSelected.locator('.inventory_item_name').textContent()
        return ItemName
    }
    
    async ValidateItemAddCart(){
        await expect(this.ButtonCartDodge).toBeVisible({ timeout: 5000 })
        await expect(this.ButtonCartDodge).toHaveText('1')
    }
}

