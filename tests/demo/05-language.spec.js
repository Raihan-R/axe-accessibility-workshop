const { test, expect } = require('@playwright/test');
const { AxeBuilder } = require('@axe-core/playwright');
const { formatViolations, findViolation } = require('../../utils/axeDemoHelpers');

test.describe('Demo 05: language rules', () => {
  test('demonstrates axe-core identifying an invalid lang attribute', async ({ page }) => {
    await page.goto('/pages/language.html');

    const results = await new AxeBuilder({ page })
      .withRules(['html-lang-valid'])
      .analyze();

    console.table(formatViolations(results.violations));

    expect(findViolation(results, 'html-lang-valid')).toBeTruthy();
  });
});
