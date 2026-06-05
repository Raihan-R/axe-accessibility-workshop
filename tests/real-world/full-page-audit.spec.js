const { test } = require('@playwright/test');
const { AxeUtils } = require('../../utils/axeUtils');

test.describe('Real-world example: full page axe audit', () => {
  let axe;

  test.beforeEach(async ({ page }) => {
    axe = new AxeUtils(page);
  });

  test('runs an accessibility audit and expects no axe-core violations', async ({ page }) => {
    await page.goto('/pages/real-world-example.html');

    await axe.audit();
  });
});
