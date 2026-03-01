const { test, expect } = require('@playwright/test');
const fs = require('fs');
const path = require('path');

test('test csv import', async ({ page }) => {
  await page.goto('file://' + path.join(__dirname, 'EloCalc.html'));

  // Set to Elo -> Win Rate mode
  await page.locator('#mode').selectOption('elo');

  // Create test file
  fs.writeFileSync('test_elo.csv', 'Name,Elo Rating\nPlayer B,1500\nPlayer C,1200\nPlayer D,800\n');

  // Import CSV
  const [fileChooser] = await Promise.all([
    page.waitForEvent('filechooser'),
    page.locator('#import').click(),
  ]);
  await fileChooser.setFiles('test_elo.csv');

  // Wait a bit for render
  await page.waitForTimeout(500);

  // Extract Elos
  const elos = await page.locator('.elo-input').all();
  for (const elo of elos) {
    console.log(await elo.inputValue());
  }
});
