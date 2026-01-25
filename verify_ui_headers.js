const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  const filePath = path.join(__dirname, 'EloCalc.html');
  await page.goto(`file://${filePath}`);

  // Switch to Elo mode
  await page.selectOption('#mode', 'elo');
  await page.waitForTimeout(500);

  // Take screenshot
  const screenshotDir = path.join(__dirname, 'verification');
  if (!fs.existsSync(screenshotDir)){
      fs.mkdirSync(screenshotDir);
  }
  const screenshotPath = path.join(screenshotDir, 'ui_headers_fixed.png');
  await page.screenshot({ path: screenshotPath, fullPage: true });
  console.log(`Screenshot saved to: ${screenshotPath}`);

  await browser.close();
})();
