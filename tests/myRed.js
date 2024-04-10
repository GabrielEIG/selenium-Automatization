import { By, Key, until } from 'selenium-webdriver'
import fs from 'fs'
import {Login} from './login.js'


export const MyRed = async () =>{
  let driver = await Login();

    try {
  
      await driver.wait(until.elementLocated(By.css('a.app-aware-link.global-nav__primary-link[href="https://www.linkedin.com/mynetwork/?"')), 100000);
      
      const redLink = await driver.findElement(By.css('a.app-aware-link.global-nav__primary-link[href="https://www.linkedin.com/mynetwork/?"]'))

      await driver.takeScreenshot().then((data) => {
        fs.writeFileSync('./results/red/paso 1.png', data, 'base64');
      });
      
      await redLink.click();

      await driver.wait(until.elementLocated(By.css('a.ember-view.mn-community-summary__link.link-without-hover-state[href="/mynetwork/invite-connect/connections/"]')), 20000)

      await driver.takeScreenshot().then((data) => {
        fs.writeFileSync('./results/red/paso 2.png', data, 'base64');
      });

      const myRedLink = await driver.findElement(By.css('a.ember-view.mn-community-summary__link.link-without-hover-state[href="/mynetwork/invite-connect/connections/"]'));
      
      await myRedLink.click();

      await driver.wait(until.elementLocated(By.id('mn-connections-search-input')), 20000)

      await driver.takeScreenshot().then((data) => {
        fs.writeFileSync('./results/red/paso 3.png', data, 'base64');
      });

      await driver.findElement(By.id('mn-connections-search-input')).sendKeys('Kiancis Dominguez', Key.RETURN);

      await driver.wait(until.elementLocated(By.css('button.artdeco-button.artdeco-button--2.artdeco-button--secondary.ember-view[aria-label="Enviar un mensaje a kiancis dominguez"')), 20000)

      await driver.takeScreenshot().then((data) => {
        fs.writeFileSync('./results/red/paso 4.png', data, 'base64');
      });

      const userButton = await driver.findElement(By.css('button.artdeco-button.artdeco-button--2.artdeco-button--secondary.ember-view[aria-label="Enviar un mensaje a kiancis dominguez"'))
      
      await userButton.click()

      await driver.sleep(3000);

      await driver.takeScreenshot().then((data) => {
        fs.writeFileSync('./results/red/paso 5.png', data, 'base64');
      });

      return true;


    } finally {
      console.log("se acabo")
      setTimeout(() => driver.quit());
    }
  
  }
