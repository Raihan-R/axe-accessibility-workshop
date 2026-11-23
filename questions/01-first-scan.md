# Questions: first axe-core scan

Run:

```bash
npm run test:q1
```

This runs the test: "demonstrates axe-core identifying accessibility issues".

Expect the test to pass with multiple reported violations. It scans [first-scan.html](../pages/first-scan.html), which contains an image without alternative text, an unlabelled email input and an unnamed button.

This broad scan uses axe-core's default enabled rules. Later exercises focus on individual rules.

Look at the console output.

Compare [01-first-scan.spec.js](../tests/demo/01-first-scan.spec.js) with the HTML page to see how each finding relates to an element.

## Questions

1. How many violations were reported?
2. Which axe-core rule IDs were shown?
3. What does the `impact` field tell you?
4. Which page elements were affected?
5. Why is this useful for a Quality Engineer?
6. Why does the text “Email address” above the input still leave it without an accessible label?

-- move to question 02 --
