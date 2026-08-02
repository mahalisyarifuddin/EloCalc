const { chromium } = require('playwright');
const path = require('path');

(async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    const uri = 'file://' + path.resolve('../EloCalc.html');
    await page.goto(uri);

    await page.click('#calculate');

    // Get count of headers with sort-desc class
    const sortedDescHeaders = await page.$$eval('th.sort-desc', ths => ths.map(th => th.textContent));
    console.log('Initially sorted descending headers:', sortedDescHeaders);

    await browser.close();
})();
