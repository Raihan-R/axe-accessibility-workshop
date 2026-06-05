# Using the AxeUtils helper

The file `utils/axeUtils.js` contains a small helper class.

It is designed to show how a team might wrap axe-core in a reusable utility.

Example usage:

```js
const { test } = require('@playwright/test');
const { AxeUtils } = require('../utils/axeUtils');

test('runs an accessibility audit', async ({ page }) => {
  const axe = new AxeUtils(page);

  await page.goto('/pages/real-world-example.html');

  await axe.audit();
});
```

The helper supports:

- default WCAG tags
- targeting specific rules
- including a specific selector
- excluding a specific selector

Example:

```js
await axe.audit({
  rules: 'document-title',
  include: 'main',
});
```

In the real-world example, the helper expects no violations. This is the pattern a team may use in a CI pipeline.
