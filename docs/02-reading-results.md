# Reading axe-core results

An axe-core scan returns a results object.

The most important part for beginners is usually:

```js
results.violations
```

Each violation contains useful information, including:

| Field | Meaning |
|---|---|
| `id` | The axe-core rule that was triggered |
| `impact` | The severity level reported by axe-core |
| `description` | A short explanation of the issue |
| `help` | A plain-English summary of the rule |
| `nodes` | The page elements affected by the issue |

In Q1, the demo prints the rule ID, axe-core severity and the affected element. This is an excerpt from `npm run test:q1`:

```text
Rule:        link-name
Impact:      serious
Help:        Links must have discernible text
Affected elements:
  1. a[href="/case/456"]
     HTML: <a href="/case/456"></a>
```

The Playwright test passes because finding a violation is the expected outcome for Q1. Start with the affected element, then explain what a user experiences. In this example, a screen reader user may hear a link with no name to identify it. The `impact` field gives axe-core's severity rating.

Use the [axe 4.11 rule catalogue](https://dequeuniversity.com/rules/axe/html/4.11) to look up a rule ID and its WCAG mapping. Use the [WCAG Quick Reference](https://www.w3.org/WAI/WCAG22/quickref/) to read the success criterion and its techniques. [Q4](../questions/04-links.md) walks through this lookup.
