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

  // Check computed styles
  const styles = await page.evaluate(() => {
    const elo = document.getElementById('headElo');
    const name = document.getElementById('headName');

    // We compare against headName because it shares similar styling rules (opacity, font-size)
    // Wait, headName is: flex: 2; font-size: .85rem; opacity: .8;

    const getStyle = (el) => {
        const s = window.getComputedStyle(el);
        return { fontSize: s.fontSize, opacity: s.opacity, fontWeight: s.fontWeight };
    };

    return {
        elo: getStyle(elo),
        name: getStyle(name)
    };
  });

  console.log('Styles:', styles);

  if (styles.elo.fontSize !== styles.name.fontSize || styles.elo.opacity !== styles.name.opacity) {
      console.log('FAIL: Styles do not match.');
  } else {
      console.log('PASS: Styles match.');
  }

  await browser.close();
})();
