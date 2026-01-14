## 2024-01-20 - [Fixing CSV Import Bug]
**Mode:** Medic
**Learning:** The previous CSV parsing logic relied on `split(/\r?\n/)` which incorrectly broke rows when quoted fields contained newlines. Standard CSV parsers must handle quotes *before* splitting lines.
**Action:** Implemented a state-machine based CSV parser to correctly handle quoted newlines and delimiters.

## 2024-05-23 - [Headless CSV Import Support]
**Mode:** Medic
**Learning:** Users often upload CSVs without headers (e.g., simple "Name, Score" lists). Standard CSV parsers that assume the first row is a header will discard valid data.
**Action:** Implemented a heuristic: if standard header keywords (Name/Win) are missing AND the potential "Win" column in the first row contains a number, treat the first row as data.
