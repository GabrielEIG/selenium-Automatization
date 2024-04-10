import { Builder, Browser, By, Key, until } from 'selenium-webdriver'
import fs from 'fs';

export const LoginFail = async () => {

  let driver = await new Builder().forBrowser(Browser.CHROME).build()

  try {
    
    await driver.get('https://www.linkedin.com/')

    await driver.wait(until.elementLocated(By.name('session_key')), 10000)

    await driver.findElement(By.name('session_key')).sendKeys('carlos90@gmail.com', Key.RETURN);

    await driver.takeScreenshot().then((data) => {
      fs.writeFileSync('./results/login/Fail paso 1.png', data, 'base64');
    });

    await driver.wait(until.elementLocated(By.name('session_password')), 10000)

    await driver.findElement(By.name('session_password')).sendKeys('cololon.', Key.RETURN)

    await driver.takeScreenshot().then((data) => {
      fs.writeFileSync('./results/login/Fail paso 2.png', data, 'base64');
    });

    setTimeout(async() => await driver.takeScreenshot().then((data) => {
      fs.writeFileSync('./results/login/Fail paso 3.png', data, 'base64');
    }), 30000);

    return true;
  }finally{

    setTimeout(() => driver.quit());


  }
}

export const LoginSuccess = async () => {

  let driver = await new Builder().forBrowser(Browser.CHROME).build();

  try {
    
    await driver.get('https://www.linkedin.com/');

    await driver.wait(until.elementLocated(By.name('session_key')), 10000);

    await driver.findElement(By.name('session_key')).sendKeys('INSERTAR TU CORREO', Key.RETURN);
    await driver.takeScreenshot().then((data) => {
      fs.writeFileSync('./results/login/Success paso 1.png', data, 'base64');
    });

    await driver.wait(until.elementLocated(By.name('session_password')), 10000);

    await driver.findElement(By.name('session_password')).sendKeys('INSERTAR TU CONTRASENA', Key.RETURN);
    await driver.takeScreenshot().then((data) => {
      fs.writeFileSync('./results/login/Success paso 2.png', data, 'base64');
    })

    setTimeout(async() => await driver.takeScreenshot().then((data) => {
      fs.writeFileSync('./results/login/Success paso 3.png', data, 'base64');
    }), 50000);

    return true;

  } catch {

    console.log("Problemas en la ejecucion");


  }finally{

    setTimeout(() => driver.quit());

  }

}

export const Login = async () => {

  let driver = await new Builder().forBrowser(Browser.CHROME).build();

  try {
    
    await driver.get('https://www.linkedin.com/');

    await driver.wait(until.elementLocated(By.name('session_key')), 10000);

    await driver.findElement(By.name('session_key')).sendKeys('gencarnacion3026@gmail.com', Key.RETURN);

    await driver.wait(until.elementLocated(By.name('session_password')), 10000);

    await driver.findElement(By.name('session_password')).sendKeys('gabriel123321.', Key.RETURN);


    return driver;

  } catch {

    console.log("Problemas en la ejecucion");
    setTimeout(() => driver.quit(), 30000);

  }

}

