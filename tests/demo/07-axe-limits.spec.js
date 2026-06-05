const { test, expect } = require('@playwright/test');
const { AxeBuilder } = require('@axe-core/playwright');
const { formatViolations } = require('../../utils/axeDemoHelpers');

test.describe('Demo 07: axe-core limits', () => {
  test('shows that a page can pass axe-core but still need human judgement', async ({ page }) => {
    await page.goto('/pages/axe-limits.html');

    const results = await new AxeBuilder({ page }).analyze();

    console.table(formatViolations(results.violations));

    expect(results.violations).toEqual([]);
  });
});
