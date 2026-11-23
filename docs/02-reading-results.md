# Reading axe-core results

An axe-core scan returns a results object.

The most important part for beginners is usually:

```js
results.violations;
```

Each violation contains useful information, including:

| Field         | Meaning                                 |
| ------------- | --------------------------------------- |
| `id`          | The axe-core rule that was triggered    |
| `impact`      | The severity level reported by axe-core |
| `description` | A short explanation of the issue        |
| `help`        | A plain-English summary of the rule     |
| `nodes`       | The page elements affected by the issue |

Q1 runs a broad scan on a page with several issues, including missing image alternative text, an unlabelled input and an unnamed button. The demo prints each rule ID, axe-core severity and affected elements. This is an excerpt from `npm run test:q1`:

```text
Rule ID:     label
Impact:      critical
Help:        Form elements must have labels
Affected elements:
  1. #email
     HTML: <input id="email" name="email" type="email">
```

The Playwright test passes because finding multiple violations is the expected outcome for Q1. Start with an affected element, then explain what a user experiences. In this example, a screen reader user needs an accessible label to identify what to enter in the field. The `impact` field gives axe-core's severity rating.

Use the [axe 4.11 rule catalogue](https://dequeuniversity.com/rules/axe/html/4.11) to look up a rule ID and its WCAG mapping. Use the [WCAG Quick Reference](https://www.w3.org/WAI/WCAG22/quickref/) to read the success criterion and its techniques. [Q4](../questions/04-links.md) walks through this lookup.
