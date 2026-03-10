import { expect, Locator, Page } from "@playwright/test"

export class LoginPage{

    private readonly usernameTextbox : Locator
    private readonly passwordTextbox : Locator
    private readonly buttonLogin : Locator
    //private readonly ButtonCheckLogin : Locator

    constructor(page : Page){
        
        this.usernameTextbox = page.getByRole("textbox", {name : 'Username', exact : true})
        this.passwordTextbox = page.getByRole("textbox", {name : 'Passwoord', exact : true})
        this.buttonLogin = page.getByRole("button", {name : 'Login', exact : true})
        //this.ButtonCheckLogin = page.getByRole("")
    }

    async fillUsername(username : string){
        await this.usernameTextbox.fill(username)
    }

     async fillPassword(passwrod : string){
        await this.passwordTextbox.fill(passwrod)
    }

     async clickButtonLogin(){
        await this.buttonLogin.click()
    }

    async loginWithCredential(email:string,passwrod:string,number:string,name:string){
         await this.fillUsername(email)
         await this.fillPassword(passwrod)
         await this.buttonLogin.click()   
    }

   /* async CheckLoginSucces(){
        await expect(this.ButtonCheckLogin).toBeVisible()
    }*/
}
