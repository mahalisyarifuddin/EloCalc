## 2024-01-20 - [Fixing CSV Import Bug]
**Mode:** Medic
**Learning:** The previous CSV parsing logic relied on `split(/\r?\n/)` which incorrectly broke rows when quoted fields contained newlines. Standard CSV parsers must handle quotes *before* splitting lines.
**Action:** Implemented a state-machine based CSV parser to correctly handle quoted newlines and delimiters.
