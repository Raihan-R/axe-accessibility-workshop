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

In this repo, the demo tests print a simplified table of violations using:

```js
console.table(formatViolations(results.violations));
```

This helps learners see which rule was triggered and which element caused the issue.
