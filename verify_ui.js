const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  const filePath = path.join(__dirname, 'EloCalc.html');
  const fileUrl = `file://${filePath}`;

  console.log(`Loading: ${fileUrl}`);
  await page.goto(fileUrl);

  // Switch to Elo -> Win Rate mode
  console.log('Switching to Elo -> Win Rate mode...');
  await page.selectOption('#mode', 'elo');

  // Wait for mode switch
  await page.waitForTimeout(500);

  // Click Calculate
  console.log('Clicking Calculate...');
  await page.click('#calculate');

  // Wait for results
  const results = page.locator('#results');
  await results.waitFor({ state: 'visible' });

  // Take screenshot
  const screenshotDir = path.join(__dirname, 'verification');
  if (!fs.existsSync(screenshotDir)){
      fs.mkdirSync(screenshotDir);
  }
  const screenshotPath = path.join(screenshotDir, 'ui_results.png');
  await page.screenshot({ path: screenshotPath, fullPage: true });
  console.log(`Screenshot saved to: ${screenshotPath}`);

  const bodyText = await page.innerText('body');
  const missingLabel = 'ObjectTableLabels.TRANSIT';
  const keyword = 'TRANSIT';

  if (bodyText.includes(missingLabel) || bodyText.includes(keyword)) {
    console.log('BUG FOUND: The page contains the reported error text.');
  } else {
    console.log('BUG NOT FOUND: The page does NOT contain "ObjectTableLabels.TRANSIT" or "TRANSIT".');
  }

  await browser.close();
})();
