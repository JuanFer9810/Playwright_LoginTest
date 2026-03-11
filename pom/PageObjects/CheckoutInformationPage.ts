import { expect, Locator, Page } from "@playwright/test"

export class CheckoutInformationPage{

    private readonly FirstNameTextbox : Locator
    private readonly LastNameTextbox : Locator
    private readonly PostalCodeTextbox : Locator
    private readonly ButtonContinue : Locator

       constructor(page : Page){

        this.FirstNameTextbox = page.getByRole('textbox', { name: 'First Name' })
        this.LastNameTextbox = page.getByRole('textbox', { name: 'Last Name' })
        this.PostalCodeTextbox = page.getByRole('textbox', { name: 'Zip/Postal Code' })
        this.ButtonContinue = page.getByRole('button', { name: 'Continue' })
        
    }   

        async ValidateCheckoutInformation(FirstName : string,LastName : string,PostalCode : string){    
        await expect(this.FirstNameTextbox).toBeVisible({ timeout: 5000 })
        await this.FirstNameTextbox.fill(FirstName)
        await this.LastNameTextbox.fill(LastName)
        await this.PostalCodeTextbox.fill(PostalCode)
        await this.ButtonContinue.click()
        }
}