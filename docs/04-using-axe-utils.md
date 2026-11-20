# Using the AxeUtils helper

The [AxeUtils helper](../utils/axeUtils.js) shows how a team can reuse the same scan configuration and assertion. Axe-core supplies the built-in rule logic. Your Playwright test navigates or interacts with the page to reach the state you want to scan.

The [real-world spec](../tests/real-world/full-page-audit.spec.js) uses this pattern:

```js
const { test } = require('@playwright/test');
const { AxeUtils } = require('../../utils/axeUtils');

test('runs an accessibility audit', async ({ page }) => {
  const axe = new AxeUtils(page);

  await page.goto('/pages/real-world-example.html');

  await axe.audit();
});
```

The helper combines A and AA tags from WCAG 2.0, 2.1 and 2.2 because later versions carry forward earlier success criteria. The axe-core version in this workshop has one rule tagged `wcag22aa`, `target-size`, and zero rules tagged `wcag22a`. The tags select available automated checks. Assessing conformance also requires manual testing.

To see a scan focused on one rule, open the [Q4 link test](../tests/demo/04-links.spec.js). It calls `withRules(['link-name'])` on `AxeBuilder`. The helper also supports `include` and `exclude` selectors when you need to scope a scan to part of a page.

In the real-world example, the helper calls `expect.soft(results.violations).toEqual([])`. A failed soft assertion marks the Playwright test as failed and lets the remaining steps run. This is useful if a journey test needs to scan several page states.

[Axe 4.11 rule catalogue](https://dequeuniversity.com/rules/axe/html/4.11) · [WCAG Quick Reference](https://www.w3.org/WAI/WCAG22/quickref/) · [Playwright soft assertions](https://playwright.dev/docs/test-assertions#soft-assertions)
