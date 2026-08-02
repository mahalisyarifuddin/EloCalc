const { chromium } = require('playwright');
const path = require('path');
const assert = require('assert');

(async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    const uri = 'file://' + path.resolve('../EloCalc.html');
    await page.goto(uri);

    await page.click('#calculate');

    // Sort by name
    await page.click('th[data-sort="name"]');
    let ascHeaders = await page.$$eval('th.sort-asc', ths => ths.map(th => th.textContent));
    let descHeaders = await page.$$eval('th.sort-desc', ths => ths.map(th => th.textContent));
    assert.deepStrictEqual(ascHeaders, ['Name']);
    assert.deepStrictEqual(descHeaders, []);

    // Sort by rank
    await page.click('th[data-sort="rank"]');
    ascHeaders = await page.$$eval('th.sort-asc', ths => ths.map(th => th.textContent));
    descHeaders = await page.$$eval('th.sort-desc', ths => ths.map(th => th.textContent));
    assert.deepStrictEqual(ascHeaders, ['#']);
    assert.deepStrictEqual(descHeaders, []);

    // Click rank again
    await page.click('th[data-sort="rank"]');
    ascHeaders = await page.$$eval('th.sort-asc', ths => ths.map(th => th.textContent));
    descHeaders = await page.$$eval('th.sort-desc', ths => ths.map(th => th.textContent));
    assert.deepStrictEqual(ascHeaders, []);
    assert.deepStrictEqual(descHeaders, ['#']);

    await browser.close();
    console.log("Tests passed!");
})();
