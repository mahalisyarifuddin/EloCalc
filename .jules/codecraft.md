## 2024-05-21 - Fix Validation Bug in `calculate()`
**Mode:** Razor
**Learning:** Over-abstracting simple logic into ternary operators in the name of conciseness can create critical functional bugs and degrade code readability, particularly when evaluating form validation checks.
**Action:** When simplifying repetitive conditional logic in validation, preserve explicit variables and early returns if consolidating them into a single ternary operator creates an unreadable block or inadvertently alters the order of operations.

## 2024-05-23 - Focus Restoration in `calculate()`
**Mode:** Medic
**Learning:** When invoking operations like `calculate()` that trigger complete DOM re-renders of active input lists (such as `renderCompetitors()` recreating `.competitor-row` elements), active keyboard focus gets lost because the original elements are destroyed.
**Action:** Active keyboard focus must be explicitly cached via unique attributes (like `data-id` and input classes) and programmatically restored afterwards to prevent the focus from unexpectedly reverting to the document body.
## 2024-05-24 - Implicit Returns and Short Circuits\n**Mode:** Razor\n**Learning:** Explicit return blocks in array mappings (like `.map()`) can often be streamlined using implicit returns in string templating, while independent conditionals with similar short fallback logic can be combined safely via logical operators (`||`, `?.`) to drastically reduce line count without losing correctness.\n**Action:** Utilize optional chaining (`?.`) and logical OR (`||`) operators for default fallback execution targets, and convert `map` iterations returning multiline template literals into implicit arrows.
