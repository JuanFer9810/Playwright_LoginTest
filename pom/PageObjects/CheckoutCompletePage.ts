import { expect, Locator, Page } from "@playwright/test"

export class CheckoutCompletePage{

    private readonly MessageComplete : Locator
    private readonly ButtonBackHome : Locator

    constructor(page : Page){
        this.MessageComplete = page.getByRole('heading', { name: 'Thank you for your order!' })
        this.ButtonBackHome = page.getByRole('button', { name: 'Back Home' }) 
    }   

    async ValidateBuyComplete(){    
        await this.MessageComplete.isVisible({ timeout: 5000 })
        await expect(this.MessageComplete).toContainText('Thank you for your order!')
        await this.ButtonBackHome.click()
    }
}