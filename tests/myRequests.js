import { By, until } from 'selenium-webdriver'
import fs from 'fs'
import {Login} from './login.js'

export const MyRequests = async () => {

  let driver = await Login();

  try {

    await driver.wait(until.elementLocated(By.css('a.app-aware-link.global-nav__primary-link[href="https://www.linkedin.com/jobs/?"')), 100000);


    const employs = await driver.findElement(By.css('a.app-aware-link.global-nav__primary-link[href="https://www.linkedin.com/jobs/?"][data-test-app-aware-link=""]'))

    await driver.takeScreenshot().then((data) => {
      fs.writeFileSync('./results/request/paso 1.png', data, 'base64');
    });

    await employs.click();

    await driver.wait(until.elementLocated(By.css('a.app-aware-link.jobshome_nav_my_jobs[href="https://www.linkedin.com/my-items/saved-jobs"][data-test-app-aware-link=""]')), 10000)

    await driver.takeScreenshot().then((data) => {
      fs.writeFileSync('./results/request/paso 2.png', data, 'base64');
    });

    const myEmploys = await driver.findElement(By.css('a.app-aware-link.jobshome_nav_my_jobs[href="https://www.linkedin.com/my-items/saved-jobs"][data-test-app-aware-link=""]'));
    await myEmploys.click();

    await driver.wait(until.elementLocated(By.xpath(`//*[@id="search-reusables__filters-bar"]/ul/li[3]/button`)), 10000)

    await driver.takeScreenshot().then((data) => {
      fs.writeFileSync('./results/request/paso 3.png', data, 'base64');
    });

    const requests = await driver.findElement(By.xpath(`//*[@id="search-reusables__filters-bar"]/ul/li[3]/button`));
    await requests.click();

    await driver.wait(until.elementLocated(By.css('ul.reusable-search__entity-result-list.list-style-none')), 10000);

    await driver.takeScreenshot().then((data) => {
      fs.writeFileSync('./results/request/paso 4.png', data, 'base64');
    });

    for (let i = 0; i < 3; i++) {

      await driver.wait(until.elementLocated(By.css('ul.reusable-search__entity-result-list.list-style-none')), 10000);
      const list = await driver.findElement(By.css('ul.reusable-search__entity-result-list.list-style-none'));
      const items = await list.findElements(By.css('li'));
      
      await items[i].click();
    
      await driver.sleep(5000);
      
      await driver.takeScreenshot().then((data) => {
        fs.writeFileSync(`./results/request/paso ${4+i}.png`, data, 'base64');
      });
    
      await driver.navigate().back();
    
      await driver.sleep(3000);
    
    }
    
    return true;

  } finally {
    console.log("se acabo");
    setTimeout(() => driver.quit());
  }
}
