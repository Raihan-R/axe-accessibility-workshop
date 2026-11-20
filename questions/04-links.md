# Questions: links

Run:

```bash
npm run test:q4
```
This runs the test: "demonstrates axe-core identifying links without accessible names".

Expect the test to Pass.
This is demonstrating that axe core has successfully identified an accessible issue on the page.

Look at the console output.

Have a look at 04-links.spec.js file to view how the test was written.

## Questions

1. Which link rule was triggered?
2. Which element caused the issue?
3. Open the **More info** URL in the terminal, or use the [Deque rule page](https://dequeuniversity.com/rules/axe/4.11/link-name). What does `link-name` check?
4. Look up **2.4.4 Link Purpose (In Context)** in the [WCAG Quick Reference](https://www.w3.org/WAI/WCAG22/quickref/). On the [demo page](../pages/links.html), can you tell where “Click here” leads from its name and context? How would you name the two case links?
5. If both links had the same accessible name and led to different cases, what would you check manually?

-- move to question 05 --
