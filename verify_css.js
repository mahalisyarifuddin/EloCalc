const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  const filePath = path.join(__dirname, 'EloCalc.html');
  await page.goto(`file://${filePath}`);

  // Switch to Elo mode
  await page.selectOption('#mode', 'elo');
  await page.waitForTimeout(500);

  // Check styles
  const width = await page.$eval('#normalizeElo', el => getComputedStyle(el).width);
  const allowTiesWidth = await page.$eval('#allowTies', el => getComputedStyle(el).width);

  console.log(`normalizeElo width: ${width}`);
  console.log(`allowTies width: ${allowTiesWidth}`); // allowTies is hidden but should have style rules

  // Also check if allowTies is visible
  const allowTiesVisible = await page.isVisible('#allowTies');
  console.log(`allowTies visible in Elo mode: ${allowTiesVisible}`);

  const normalizeEloVisible = await page.isVisible('#normalizeElo');
  console.log(`normalizeElo visible in Elo mode: ${normalizeEloVisible}`);

  await browser.close();
})();
