const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://payment-ecpay.onrender.com/checkout');
  await page.waitForNavigation();
  await page.waitForTimeout(1000);
  await page.waitForSelector('#liWebATM');
  await page.click('#liWebATM');
  await page.waitForSelector('#selectWebATMBank', '10001@2000@webATM_TAISHIN');
  await page.click('#WebATMPaySubmit');
  await page.waitForTimeout(1000);
  await page.waitForSelector('#btnClose');
  await page.click('#btnClose');
//   await page.screenshot({ path: 'example.png' });
  await page.waitForNavigation();

  await page.waitForSelector('body > form > fieldset > p > input[type=submit]');
  await page.click('body > form > fieldset > p > input[type=submit]');

  await page.waitForSelector('body > div.site-body > div.site-content-wrapper > div > div.scw-btn-block.sb-pding-2.scw-m-width > a > span');
  await page.click('body > div.site-body > div.site-content-wrapper > div > div.scw-btn-block.sb-pding-2.scw-m-width > a > span');

  await page.waitForTimeout(50);
  await browser.close();

})();