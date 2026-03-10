import { expect, Locator, Page } from "@playwright/test"

export class LoginPage{

    private readonly usernameTextbox : Locator
    private readonly passwordTextbox : Locator
    private readonly buttonLogin : Locator
    private readonly ButtonCheckLogin_buttonmenu : Locator
    private readonly ButtonCheckDefault : Locator

    constructor(page : Page){
        
        this.usernameTextbox = page.getByRole("textbox", {name : 'Username', exact : true})
        this.passwordTextbox = page.getByRole("textbox", {name : 'Password', exact : true})
        this.buttonLogin = page.getByRole("button", {name : 'Login', exact : true})
        this.ButtonCheckLogin_buttonmenu = page.getByRole("button",{name:'Open Menu',exact:true})
        this.ButtonCheckDefault = page.locator('//button[@class="error-button"]')
    }

    async fillUsername(username : string){
        await this.usernameTextbox.fill(username)
    }

     async fillPassword(password : string){
        await this.passwordTextbox.fill(password)
    }

     async clickButtonLogin(){
        await this.buttonLogin.click()
    }

    async loginWithCredential(email:string,passwrod:string){
         await this.fillUsername(email)
         await this.fillPassword(passwrod)
         await this.buttonLogin.click()  
    }

   async CheckLoginSucces(){
        await expect(this.ButtonCheckLogin_buttonmenu).toBeVisible()
   }

    async CheckLoginDefeat(){
        await this.ButtonCheckDefault.locator('//button[@class="error-button"]').isVisible()
        
   }
}
