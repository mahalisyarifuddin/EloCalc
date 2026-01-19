
from playwright.sync_api import sync_playwright
import os

def test_elocalc():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Load the local file
        filepath = os.path.abspath('EloCalc.html')
        page.goto(f'file://{filepath}')

        # Fill in Main Contender Name
        page.fill('#mainName', 'CodeCraft Hero')

        # Add Competitors
        # There are default competitors. Let's modify one.
        # Find first competitor input
        page.fill('.competitor-row:first-child .name-input', 'Villain A')
        page.fill('.competitor-row:first-child .win-input', '20')
        page.fill('.competitor-row:first-child .tie-input', '10')

        # Click Calculate
        page.click('#calculate')

        # Wait for results
        page.wait_for_selector('#resultsTable')

        # Check for Rank column
        headers = page.locator('th')
        print("Headers:", headers.all_inner_texts())
        assert '#' in headers.all_inner_texts() or 'Rank' in headers.all_inner_texts()

        # Check for Highlight class
        highlighted = page.locator('.highlight')
        assert highlighted.count() > 0

        # Take screenshot
        page.screenshot(path='verification/verification.png')

        browser.close()

if __name__ == "__main__":
    test_elocalc()
