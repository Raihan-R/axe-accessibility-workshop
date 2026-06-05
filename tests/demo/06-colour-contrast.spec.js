const { test, expect } = require('@playwright/test');
const { AxeBuilder } = require('@axe-core/playwright');
const { formatViolations, findViolation } = require('../../utils/axeDemoHelpers');

test.describe('Demo 06: colour contrast rule', () => {
  test('demonstrates axe-core identifying low colour contrast', async ({ page }) => {
    await page.goto('/pages/colour-contrast.html');

    const results = await new AxeBuilder({ page })
      .withRules(['color-contrast'])
      .analyze();

    console.table(formatViolations(results.violations));

    expect(findViolation(results, 'color-contrast')).toBeTruthy();
  });
});
