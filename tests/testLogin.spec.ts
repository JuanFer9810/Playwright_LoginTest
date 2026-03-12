import { test, expect } from '@playwright/test';
import { LoginPage } from '../pom/PageObjects/LoginPage';
import {URLS,Credentials} from '../pom/Data/Constants'

// Bien, mejoro la gramatica del proyecto pero le falta un test debe ser . Sintaxis es otra cosa directo de como usa los recursos de typescript
// Pero en los test, ya de por si sabemos que son test, entonces no es necesario colocar la palabra test en el nombre del test
// Pero le falta mas especificidad, hay unos principios de software que se llaman SOLID esos son para buenas practicas y de ellos sale lo del uso de POM que eso ya lo esta implementando
// Pero es bueno que le de una leida. Y hay otros principios que son los de testing
// QUe se llaman FIRST, que es un acronimo de Fast, Independent, Repeatable, Self-validating, Timely. Entonces el test debe ser rapido, independiente, repetible, auto deterministico y oportuno(Worthy) en otra literatura.
// Basicamente es que los test deben ser y ejecutarse rapido: carita feliz
// independientes: media carita feliz porque ahi le hace falta manejo de excepciones sino lee las variables de entorno, o alguna forma de leer dinamico los user y passwords de la pagina porque que pasa si los cambian
// repetibles: carita feliz 
// auto deterministico: 1/4 de carita feliz, porque los nombres de los test no estan descriptivos y asi mismo debe ser claro que se logra con ellos test exitoso si chevere, pero usando que usuarios.
// oportuno: 1/4 de carita feliz, no se sabe si es un test de componente o de smoke, o de e2e. Entonces eso es importante para saber cuando ejecutarlo y que impacto tiene. Leer el tema de tags para playwright 
// y leer del pipeline de CI/CD como se ejecutan los test por tags
test('Validate Login Success Message With Valid Credentials @smoke', async ({ page },testINFO) => {
  await page.goto(URLS.URLSauceDemon)
 const Login = new LoginPage(page)
    await Login.loginWithCredential(Credentials.UsernameSauceDemo,Credentials.PasswordSauceDemo)
    // Si pillo porque se debe utiliza asi explicito ? 
    await page.waitForURL('**/inventory.html');
    await Login.ValidateLoginSuccessMessage()

      // captura que se adjunte al reporte 
    await testINFO.attach('login',{
        body: await page.screenshot(),
        contentType: 'image/png'
    })

});
// Si va a manejar variables de entorno de una vez todas las contrasenas ahi, ese password_bad quemado ahi no
test('Validate Login Error Message When using Invalid Credentials @smoke', async ({ page },testINFO) => {

  await page.goto(URLS.URLSauceDemon)

 const Login = new LoginPage(page)
    await Login.loginWithCredential(Credentials.UsernameSauceDemo,'password_bad')
    await Login.MistakeLoginSuccessMessage()
    await testINFO.attach('login',{
        body: await page.screenshot(),
        contentType: 'image/png'
    })

});
