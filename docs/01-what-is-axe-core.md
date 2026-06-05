# What is axe-core?

Axe-core is an accessibility testing engine.

It scans the rendered DOM of a page and reports accessibility violations based on a set of rules.

When used with Playwright, axe-core runs inside a real browser context. This means the scan runs against the page after it has been loaded by the browser.

Axe-core can help identify technical accessibility issues such as:

- missing accessible names
- missing or empty page titles
- invalid language attributes
- low colour contrast
- incorrect heading structure
- incorrect ARIA usage

Axe-core is useful because it can support your accessibility testing, quickly and easily, and it can be ran  as part of automated tests.

However, axe-core is not a complete accessibility test by itself. It should support manual accessibility testing, not replace it.
