import { By, until } from 'selenium-webdriver'
import fs from 'fs'
import {Login} from './login.js'


export const MyEvents = async () =>{
    
  let driver = await Login();

    try {
  
      await driver.wait(until.elementLocated(By.css('a.app-aware-link.global-nav__primary-link[href="https://www.linkedin.com/mynetwork/?')), 100000);

      const redLink = await driver.findElement(By.css('a.app-aware-link.global-nav__primary-link[href="https://www.linkedin.com/mynetwork/?"]'))

      await driver.takeScreenshot().then((data) => {
        fs.writeFileSync('./results/events/paso 1.png', data, 'base64');
      });
      
      await redLink.click();

      await driver.wait(until.elementLocated(By.css('a.ember-view.mn-community-summary__link.link-without-hover-state[href="/mynetwork/network-manager/events/?source=community-summary"]')), 20000)

      await driver.takeScreenshot().then((data) => {
        fs.writeFileSync('./results/events/paso 2.png', data, 'base64');
      });

      const myRedLink = await driver.findElement(By.css('a.ember-view.mn-community-summary__link.link-without-hover-state[href="/mynetwork/network-manager/events/?source=community-summary"]'));
      
      await myRedLink.click();

      await driver.wait(until.elementLocated(By.css('a[href="/events/entrevistasdetrabajoinicialesyp7103100134468550656/"]')), 20000)

      await driver.takeScreenshot().then((data) => {
        fs.writeFileSync('./results/events/paso 3.png', data, 'base64');
      });

      const eventSelected = await driver.findElement(By.css('a[href="/events/entrevistasdetrabajoinicialesyp7103100134468550656/"]'));

      await eventSelected.click();

      await driver.wait(until.elementLocated(By.css('h1[data-event-id="7103100134468550656"]')), 20000)

      await driver.takeScreenshot().then((data) => {
        fs.writeFileSync('./results/events/paso 4.png', data, 'base64');
      });


      return true;


    } finally {
      console.log("se acabo")
      setTimeout(() => driver.quit());
    }
  
  }
