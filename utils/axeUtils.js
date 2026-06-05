const { AxeBuilder } = require('@axe-core/playwright');
const { expect } = require('@playwright/test');

class AxeUtils {
  constructor(page) {
    this.page = page;

    this.DEFAULT_TAGS = [
      'wcag2a',
      'wcag2aa',
      'wcag21a',
      'wcag21aa',
      'wcag22a',
      'wcag22aa',
    ];
  }

  async audit(options = {}) {
    const builder = new AxeBuilder({ page: this.page }).withTags(this.DEFAULT_TAGS);

    const toArray = (value) => (!value ? [] : Array.isArray(value) ? value : [value]);

    toArray(options.rules).forEach((rule) => builder.withRules(rule));
    toArray(options.include).forEach((selector) => builder.include(selector));
    toArray(options.exclude).forEach((selector) => builder.exclude(selector));

    const results = await builder.analyze();

    expect.soft(results.violations).toEqual([]);
  }
}

module.exports = { AxeUtils };
