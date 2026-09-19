## 2024-05-21 - Fix Validation Bug in `calculate()`
**Mode:** Razor
**Learning:** Over-abstracting simple logic into ternary operators in the name of conciseness can create critical functional bugs and degrade code readability, particularly when evaluating form validation checks.
**Action:** When simplifying repetitive conditional logic in validation, preserve explicit variables and early returns if consolidating them into a single ternary operator creates an unreadable block or inadvertently alters the order of operations.

## 2024-05-23 - Focus Restoration in `calculate()`
**Mode:** Medic
**Learning:** When invoking operations like `calculate()` that trigger complete DOM re-renders of active input lists (such as `renderCompetitors()` recreating `.competitor-row` elements), active keyboard focus gets lost because the original elements are destroyed.
**Action:** Active keyboard focus must be explicitly cached via unique attributes (like `data-id` and input classes) and programmatically restored afterwards to prevent the focus from unexpectedly reverting to the document body.
