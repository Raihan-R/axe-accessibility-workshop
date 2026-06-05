const { test, expect } = require('@playwright/test');
const { AxeBuilder } = require('@axe-core/playwright');
const { formatViolations } = require('../../utils/axeDemoHelpers');

test.describe('Demo 01: first axe-core scan', () => {
  test('demonstrates axe-core identifying accessibility issues', async ({ page }) => {
    await page.goto('/pages/links.html');

    const results = await new AxeBuilder({ page }).analyze();

    console.table(formatViolations(results.violations));

    expect(results.violations.length).toBeGreaterThan(0);
  });
});
