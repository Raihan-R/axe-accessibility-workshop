const { test, expect } = require('@playwright/test');
const { AxeBuilder } = require('@axe-core/playwright');
const { formatViolations, findViolation } = require('../../utils/axeDemoHelpers');

test.describe('Demo 02: heading rules', () => {
  test('demonstrates axe-core identifying heading-related issues', async ({ page }) => {
    await page.goto('/pages/headings.html');

    const results = await new AxeBuilder({ page })
      .withRules(['p-as-heading', 'heading-order', 'page-has-heading-one'])
      .analyze();

    console.table(formatViolations(results.violations));

    expect(results.violations.length).toBeGreaterThan(0);
    expect(findViolation(results, 'p-as-heading')).toBeTruthy();
  });
});
