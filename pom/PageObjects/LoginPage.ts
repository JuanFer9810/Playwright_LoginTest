import { expect, Locator, Page } from "@playwright/test"

export class LoginPage{

    private readonly UsernameTextbox : Locator
    private readonly PasswordTextbox : Locator
    private readonly ButtonLogin : Locator
    private readonly SucessLoginButton : Locator
    private readonly ButtonCheckDefault : Locator

    constructor(page : Page){

        this.UsernameTextbox = page.getByRole("textbox", {name : 'Username', exact : true})
        this.PasswordTextbox = page.getByRole("textbox", {name : 'Password', exact : true})
        this.ButtonLogin = page.getByRole("button", {name : 'Login', exact : true})
        this.SucessLoginButton = page.getByRole("button",{name:'Open Menu',exact:true})
        this.ButtonCheckDefault = page.locator('//button[@class="error-button"]')
    }

    async fillUsername(username : string){
        await this.UsernameTextbox.fill(username)
    }

     async fillPassword(password : string){
        await this.PasswordTextbox.fill(password)
    }

     async clickButtonLogin(){
        await this.ButtonLogin.click()
    }

    async loginWithCredential(email:string,password:string){
         await this.fillUsername(email)
         await this.fillPassword(password)
         await this.ButtonLogin.click()  
    }
    
        
   async ValidateLoginSuccessMessage(){
        await expect(this.SucessLoginButton).toBeVisible()
   }

    async MistakeLoginSuccessMessage(){
        await expect(this.ButtonCheckDefault).toBeVisible()
        
   }
}
