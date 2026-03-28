## 2024-01-20 - [Fixing CSV Import Bug]
**Mode:** Medic
**Learning:** The previous CSV parsing logic relied on `split(/\r?\n/)` which incorrectly broke rows when quoted fields contained newlines. Standard CSV parsers must handle quotes *before* splitting lines.
**Action:** Implemented a state-machine based CSV parser to correctly handle quoted newlines and delimiters.

## 2024-05-23 - [Headless CSV Import Support]
**Mode:** Medic
**Learning:** Users often upload CSVs without headers (e.g., simple "Name, Score" lists). Standard CSV parsers that assume the first row is a header will discard valid data.
**Action:** Implemented a heuristic: if standard header keywords (Name/Win) are missing AND the potential "Win" column in the first row contains a number, treat the first row as data.

## 2024-06-25 - [Fixing Negative and Zero Elo parsing in CSV Import]
**Mode:** Medic
**Learning:** The previous CSV parsing logic for finding all-number rows and parsing values stripped negative signs using `[^\d.]` and used `|| ''` to provide fallbacks. This caused negative Elos to become positive (e.g. `-1200` to `1200`), and a genuine `0` Elo to become `''` because `0` is falsy, which effectively ignored the entry.
**Action:** Implemented a robust `parseNum` function that uses `parseFloat`, explicitly preserves negative signs with `[^\d.-]`, and only provides the fallback on `isNaN`. Updated `isAllNumbers` checking to support negatives with `/^-?\d+$/`.

## 2024-06-25 - [Fixing Headless CSV Import Detection for Swapped Columns]
**Mode:** Medic
**Learning:** For headless (no-header) CSV imports, checking if *all* columns are numbers (`isAllNumbers`) fails to identify 2-column data like `["1200", "Player B"]`. The fallback logic incorrectly defaulted to assuming the first column was the name.
**Action:** Expanded the fallback condition to `isAllNumbers || (numIndex >= 0 && header.length === 2)` to properly detect and map data regardless of whether the numerical column comes first or second in standard 2-column imports.

## 2024-07-20 - [Fixing Enter key navigation focus trap]
**Mode:** Medic
**Learning:** In applications where elements are hidden via CSS `display: none` depending on state (e.g., hiding Win Rate inputs in Elo mode), relying on DOM sibling traversal (`target.nextElementSibling.focus()`) for keyboard navigation fails because the browser cannot focus hidden elements.
**Action:** When implementing keyboard navigation through a dynamic form, explicitly query the intended target elements using class names or IDs (e.g., `row.querySelector('.elo-input')`) based on the current application state, rather than assuming DOM adjacency.

## 2025-03-28 - [Fixing Copy Button State Trap]
**Mode:** Medic
**Learning:** A state race condition occurs when restoring a temporary UI change (like 'Copied!') if the script reads the original state from the DOM. A rapid double-click causes the script to read the already-modified 'Copied!' state as the "original" text, permanently trapping the button in the success state.
**Action:** Never read volatile DOM `textContent` to cache an original state. Always restore text using the application's source of truth, such as a localized translation dictionary (`this.string('copy')`).
