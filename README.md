**English** | [Bahasa Indonesia](README-id.md)

# EloCalc
Win rates, quantified.

## Introduction
EloCalc is a single-file, browser-based tool for converting simple win rates into relative Elo ratings. Designed for gamers, sports analysts, and data enthusiasts, this tool helps visualize the skill gap between a main contender and various opponents by normalizing performance data into a standardized rating system.

The interface supports both **English** and **Bahasa Indonesia**.

## How It Works
The calculator operates in two modes:

### Win Rate -> Elo
Takes a main contender and a list of opponents with their respective win rates against the main contender.
1.  **Effective Score**: Calculates the effective win probability (Win % + 0.5 * Tie %).
2.  **Elo Difference**: Converts the effective score into an Elo point difference.
3.  **Normalization**: Adjusts ratings so the average is 1000, or anchors the main contender to 1000.

### Elo -> Win Rate
Takes a list of competitors and their known Elo ratings.
1.  **Expected Score**: Calculates the expected win rate for each matchup based on Elo difference.
2.  **Normalization (Optional)**: Can normalize ratings to average 1000.
3.  **Average Highlight**: Highlights the competitor closest to the average rating.

In both modes, you can **click any row in the results** to set that competitor as the baseline. This recalculates relative Elo differences and expected win rates against the new baseline.

## Quick Start
1.  Download `EloCalc.html`.
2.  Open it in any modern browser.
3.  Select your **Mode** (Win Rate -> Elo or Elo -> Win Rate).
4.  Enter competitor data (Names and Win Rates/Elo).
5.  Click "Calculate".
6.  Click rows in the result table to dynamically compare against different competitors.

## Key Features
-   **Dual Modes**: Convert Win Rates to Elo, or Elo to Win Rates.
-   **Baseline Comparison**: Click any row to see relative stats against that competitor.
-   **Multi-language Support**: Toggle between English and Indonesian.
-   **Dark/Light Theme**: Automatic or manual theme selection.
-   **Tie Support**: Optional input for tie/draw rates (Win Rate mode).
-   **Elo Anchoring**: Option to anchor the main contender to 1000 Elo (Win Rate mode).
-   **Elo Normalization**: Option to normalize Elo ratings to 1000 (Elo mode).
-   **Dynamic Input**: Add, remove, or clear competitors easily.
-   **CSV Import/Export**: Import match data from text files and download results.
-   **Single HTML file**: No installation, no dependencies, works completely offline.
-   **Responsive design**: Works on desktop, tablet, and mobile devices.

## Use Cases
-   **Gaming**: Estimating relative skill levels of characters or players based on matchup win rates.
-   **Sports Analysis**: converting head-to-head records into a unified rating list.
-   **Game Balance**: Visualizing the "tier list" of game elements based on performance data.

## Privacy & Data
All calculations happen locally in your browser. No data is sent to any server. The tool is completely offline once loaded.

## License
MIT License. See LICENSE for details.

## Contributions
Contributions, issues, and suggestions are welcome. Please open an issue to discuss ideas or submit a PR.
