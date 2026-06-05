const { test, expect } = require('@playwright/test');
const { AxeBuilder } = require('@axe-core/playwright');
const { formatViolations, findViolation } = require('../../utils/axeDemoHelpers');

test.describe('Demo 04: link rules', () => {
  test('demonstrates axe-core identifying links without accessible names', async ({ page }) => {
    await page.goto('/pages/links.html');

    const results = await new AxeBuilder({ page })
      .withRules(['link-name'])
      .analyze();

    console.table(formatViolations(results.violations));

    expect(findViolation(results, 'link-name')).toBeTruthy();
  });
});
