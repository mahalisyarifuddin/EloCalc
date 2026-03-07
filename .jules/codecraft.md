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
