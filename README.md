# Playwright axe-core accessibility workshop

This repo is a beginner-friendly demonstration of how `axe-core` can be used with Playwright to support automated accessibility testing.

It is designed for beginner and graduate-level Quality Engineers who want to see axe-core in action.

The aim is not to ask learners to fix issues. Instead, learners can run tests, see axe-core identify issues, read the output, and understand where automated accessibility testing fits within a wider accessibility testing approach.

## What you will learn

By working through this repo, you will see how to:

- install and use `@axe-core/playwright`
- run axe-core inside Playwright tests
- scan a rendered page in a browser context
- target specific axe-core rules
- read violation output
- understand common rules such as `document-title`, `link-name`, `p-as-heading`, `html-lang-valid`, and `color-contrast`
- understand why automated checks do not replace manual accessibility testing

## Prerequisites

You should have:

- Node.js installed
- a code editor such as VS Code
- basic JavaScript knowledge
- basic awareness of Playwright tests

## Getting started

Clone the repo and install dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

Run the demonstration tests:

```bash
npm run test:demo
```

Run the real-world example:

```bash
npm run test:real-world
```

Open the Playwright HTML report:

```bash
npm run report
```
Once you are all set up - you can find steps to follow in the Learning Path section below.

## !! Important note about the demo tests !!

The demo tests are intentionally written to pass when axe-core identifies the expected issue.

For example, a demo test may expect `document-title` to be reported on a page with an empty `<title>` element.

That means the demo tests are not saying the page is accessible. They are showing that axe-core successfully detected a particular accessibility issue.

## Repo structure

```text
.
├─ docs/                 Written guide sections
├─ pages/                Simple HTML pages used by the tests
├─ questions/            Questions to run tests and learn as you go
├─ tests/
│  ├─ demo/              Tests that demonstrate axe-core detecting issues
│  └─ real-world/        Example of how axe-core could be used in a real test suite
└─ utils/                Shared axe-core helper utilities
```

##  Learning path

1. Read files in `docs/`
2. Go through each tutorial in `questions/`
3. Compare each test with the matching page in `pages/` to understand what is being tested.
4. Run the real world example - following instructions at the bottom of 07-axe-limits.md

## Demo tests

| Test | What it demonstrates |
|---|---|
| `01-first-scan.spec.js` | Running a basic axe-core scan |
| `02-headings.spec.js` | Heading-related rules |
| `03-page-title.spec.js` | Empty or missing page title |
| `04-links.spec.js` | Links without accessible names |
| `05-language.spec.js` | Invalid page language |
| `06-colour-contrast.spec.js` | Low colour contrast |
| `07-axe-limits.spec.js` | Why automated testing still needs human judgement |

## Real-world example

The file `tests/real-world/full-page-audit.spec.js` shows a more realistic pattern where the test expects no axe-core violations.

This is closer to how a team may use axe-core in a CI pipeline.

## Manual testing still matters

Passing axe-core checks does not mean a page is fully accessible.

Automated checks should be combined with manual testing, including:

- keyboard-only testing
- screen reader testing
- zoom and reflow checks
- checking that content and instructions are meaningful
- checking that users can complete real journeys comfortably

## Useful commands

```bash
npm test
npm run test:demo
npm run test:real-world
npm run test:headed
npm run test:ui
npm run report
```
