import { test, expect } from '@playwright/test';
import { LoginPage } from './PageObjects/LoginPage';
// Esto si es por que se me olvido enseñarlo pero ese man de Julian Mesa debe tener videos de nomenclatura Gherkin, que 
// es lo que mas se usa para pruebas en general se dice que las pruebas son por feature en espanol es como un conjunto de funcionalidades
// en este caso iniciar sesion entonces en playwright debe existir algo como describe('Inicio de Sesion', () => { })
// para decirle al compilador todo este bloque son pruebas de inicio de sesion, de hecho no le debio de haber corrido sin eso pero bueno la magia de un buen framework
// con eso tambien para cada test debe ser descriptivo y obvio en letra despegada el nombre del test debe ser autodescriptivo y completo no importa que se extienda un poquito
// test('Validate Successful Login With Valid Credentials', por ejemplo 
// test('Validate An Error Message is Shown When Using Invalid Credentials',
// Puntos porque funciona bien el caso positivo, pero el negativo ahi le deje el comentario en el metodo de porque no valida nada

test('testLoginUsergood', async ({ page },testINFO) => {
  //await page.goto(process.env.URL)
  // No se si en los videos estaba pero si usa el env para la url, no lo ponga quemado
// page.goto(process.env.URL) pero con cuidado es breve configurarlo en el archivo de playwight.config.ts 
// linea 9 creo que es el path del .env y por seguridad hay mucha data tokens, secrets, url, cedulas, tarjetas de credito etc etc que se manejan por .env 
// puntos por intentar usarlo pero pillese bien como configurarlo 
  await page.goto('https://www.saucedemo.com/');

 const Login = new LoginPage(page)
    await Login.loginWithCredential('standard_user','secret_sauce')
    await Login.CheckLoginSucces()

      // captura que se adjunte al reporte 
    await testINFO.attach('login',{
        body: await page.screenshot(),
        contentType: 'image/png'
    })

});

test('testLoginUserbad', async ({ page },testINFO) => {
  //await page.goto(process.env.URL)
  await page.goto('https://www.saucedemo.com/');

 const Login = new LoginPage(page)
    await Login.loginWithCredential('standard_user','password_bad')
    await Login.CheckLoginDefeat()

      // captura que se adjunte al reporte 
      // bien por lo del reporte pero ese Julian mesa es un bobo hp para los reportes despues le enseno a crearlos bien
      // y normalmente eso va en tareas o hooks que se ejecutan despues de los tests, algo asi como 
      // test.afterEach(async ({ page }, testINFO) => { entonces en espanol es como despues de cada test tome los screenshot, incluso eso se pone 
      // es depues de cada paso del test o despues de cada interaccion con la pagina. Se doy puntos por proactivo pero despues se los enseno melos
    await testINFO.attach('login',{
        body: await page.screenshot(),
        contentType: 'image/png'
    })

});
