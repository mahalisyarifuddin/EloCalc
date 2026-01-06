**English** | [Bahasa Indonesia](README-id.md)

# EloCalc
Win rates, quantified.

## Introduction
EloCalc is a single-file, browser-based tool for converting simple win rates into relative Elo ratings. Designed for gamers, sports analysts, and data enthusiasts, this tool helps visualize the skill gap between a main contender and various opponents by normalizing performance data into a standardized rating system.

The interface supports both **English** and **Bahasa Indonesia**.

## How It Works
The calculator takes a main contender and a list of opponents with their respective win rates against the main contender, then:

1.  **Effective Score**: Calculates the effective win probability (Win % + 0.5 * Tie %).
2.  **Elo Difference**: Converts the effective score into an Elo point difference using the standard logistic distribution formula (400-point rule).
3.  **Normalization**: Adjusts all ratings (including the main contender) so that the average rating of the entire pool is exactly 1000.
4.  **Results**: Displays a table of estimated Elo ratings, effective scores, and relative differences.

## Quick Start
1.  Download `EloCalc.html`.
2.  Open it in any modern browser (Chrome, Edge, Firefox, Safari).
3.  Enter the name of your Main Contender (e.g., "My Team").
4.  Add competitors and input their win rate against the Main Contender.
5.  Enable "Include Tie Rates" if draws are possible.
6.  Click "Calculate Ratings".
7.  View the normalized Elo ratings and export to CSV if needed.

## Key Features
-   **Multi-language Support**: Toggle between English and Indonesian.
-   **Dark/Light Theme**: Automatic or manual theme selection.
-   **Tie Support**: Optional input for tie/draw rates (counting as half a win).
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
