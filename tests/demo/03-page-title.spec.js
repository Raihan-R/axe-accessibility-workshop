const { test, expect } = require('@playwright/test');
const { AxeBuilder } = require('@axe-core/playwright');
const { formatViolations, findViolation } = require('../../utils/axeDemoHelpers');

test.describe('Demo 03: page title rule', () => {
  test('demonstrates axe-core identifying a missing or empty page title', async ({ page }) => {
    await page.goto('/pages/page-title.html');

    const results = await new AxeBuilder({ page })
      .withRules(['document-title'])
      .analyze();

    console.table(formatViolations(results.violations));

    expect(findViolation(results, 'document-title')).toBeTruthy();
  });
});
