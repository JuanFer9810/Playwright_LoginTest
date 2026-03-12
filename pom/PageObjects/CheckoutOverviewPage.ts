import { expect, Locator, Page } from "@playwright/test"

export class CheckoutOverviewPage{

    private readonly InventoryItemName : Locator
    private readonly ButtonFinish : Locator

    constructor(page : Page){
        this.InventoryItemName = page.locator('//*[@class="inventory_item_name"]')
        this.ButtonFinish = page.getByRole('button', { name: 'Finish' })
    }   

    async ValidatePriceInformation(ItemName : string){    
        await this.InventoryItemName.isVisible({ timeout: 5000 })
        await expect(this.InventoryItemName).toHaveText(ItemName)
        await this.ButtonFinish.click()
    }
}