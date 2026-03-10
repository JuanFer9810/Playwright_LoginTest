import { expect, Locator, Page } from "@playwright/test"

export class LoginPage{

    private readonly usernameTextbox : Locator
    private readonly passwordTextbox : Locator
    private readonly buttonLogin : Locator
    private readonly ButtonCheckLogin_buttonmenu : Locator
    private readonly ButtonCheckDefault : Locator

    constructor(page : Page){
        // Buena nomenclatura de las variables, puntos extra por camelCase y nomenclatura descriptiva pero si empieza con camelCase no mezcle 
        // snake_case: ButtonCheckLogin_buttonmenu mejor ponerle algo asi como SuccessfulLoginButton 
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
    //Error de misspelled, enredar las palabras no es buena practica y muchos herramientas en el pipeline fallan por esas bobadas
    // Pero funciona bien password
    async loginWithCredential(email:string,passwrod:string){
         await this.fillUsername(email)
         await this.fillPassword(passwrod)
         await this.buttonLogin.click()  
    }
        // Si el metodo se llama checkLoginDefeat, se espera que el boton de error sea visible, el isVisible() solo devuelve un booleano pero se usa para otras cosas entonces en el 
        // escenario del caso fallido no esta haciendo nada hace ir a la pagina, llenar los datos, y true. Entonces cambialo por el otro metodo tobeVisible() que ahi si valida que diga el mensaje de error de login o lo que sea
        // Por gramatica en lugar de CheckLoginDefeat, se podria llamar ValidateLoginError. Ese Defeat y el check no son tan buenas traducciones. Mejor Validate y como en testing necesitamos
        // que las cosas sean menos genericas y mas especificas, se podria llamar ValidateLoginErrorMessageIsVisible 
        // Lo mismo para el CheckLoginSucces, se podria llamar ValidateLoginSuccessMessage. Funciona uno si, el otro no. Y gramatica mal ambos. 
        
   async CheckLoginSucces(){
        await expect(this.ButtonCheckLogin_buttonmenu).toBeVisible()
   }

    async CheckLoginDefeat(){
        await this.ButtonCheckDefault.locator('//button[@class="error-button"]').isVisible()
   }
}
