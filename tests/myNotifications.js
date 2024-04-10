import { By, until } from 'selenium-webdriver'
import fs from 'fs'
import {Login} from './login.js'


export const MyNotifications = async () =>{
  let driver = await Login();

    try {
  
      await driver.wait(until.elementLocated(By.css('a.app-aware-link.global-nav__primary-link[href="https://www.linkedin.com/notifications/?"')), 100000);
      
      const notificationLink = await driver.findElement(By.css('a.app-aware-link.global-nav__primary-link[href="https://www.linkedin.com/notifications/?"][data-test-app-aware-link=""]'))

      await driver.takeScreenshot().then((data) => {
        fs.writeFileSync('./results/notification/paso 1.png', data, 'base64');
      });

      await notificationLink.click();

      await driver.takeScreenshot().then((data) => {
        fs.writeFileSync('./results/notification/paso 2.png', data, 'base64');
      });;
      
      for (let i = 0; i < 3; i++) {
        // Seleccionar el elemento de notificación en función del índice
        await driver.wait(until.elementLocated(By.css(`div[data-finite-scroll-hotkey-item="${i}"]`)))

        const notificationElement = await driver.findElement(By.css(`div[data-finite-scroll-hotkey-item="${i}"]`));

        // Hacer clic en el elemento de notificación
        await notificationElement.click();
        // Esperar un segundo para simular una acción en la notificación
        await driver.sleep(5000)
        
        await driver.takeScreenshot().then((data) => {
          fs.writeFileSync(`./results/notification/paso ${3+i}.png`, data, 'base64');
        });;
        // Volver atrás en el historial del navegador para regresar a la lista de notificaciones
        await driver.navigate().back();
        // Esperar un segundo antes de continuar con la siguiente notificación
        await driver.sleep(3000);
    }

    return true;


    } finally {
      console.log("se acabo")
      setTimeout(() => driver.quit());
    }
  
  }
