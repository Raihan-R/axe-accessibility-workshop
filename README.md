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

- Node.js installed (see the setup steps below)
- a code editor such as VS Code
- basic JavaScript knowledge
- basic awareness of Playwright tests

## Getting started

### Install Node.js

If you already have Node.js installed, check it using the commands below.

Otherwise, download the **LTS (Long Term Support)** version for your operating system from the [official Node.js download page](https://nodejs.org/en/download) and follow the installation instructions. The installer includes npm, which installs the workshop dependencies.

After installation, close and reopen your terminal. If you use the terminal in VS Code, restart VS Code too.

Check that Node.js and npm are available:

```bash
node --version
npm --version
```

Both commands should display a version number. If either command is not recognized, check that installation completed and reopen your terminal before continuing.

### Install the workshop dependencies

Clone or download this repo, then open a terminal in the repo folder containing `package.json`. Install the dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install chromium
```

Check your setup with the first exercise:

```bash
npm run test:q1
```

The test should pass and the terminal should report multiple violations, including `image-alt`, `label` and `button-name`. Playwright starts the local server for you.

## Commands to use during the workshop

To run all the demonstration tests:

```bash
npm run test:demo
```

To run the real-world example:

```bash
npm run test:real-world
```

To open the Playwright HTML report:

```bash
npm run report
```

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

## Learning path

1. Read [What is axe-core?](docs/01-what-is-axe-core.md) and [Reading axe-core results](docs/02-reading-results.md). The results guide includes sample output if you cannot run the tests locally.
2. Start with [Q1 First scan](questions/01-first-scan.md) and [Q4 Links](questions/04-links.md) during the live session. If you are working through the repo on your own, you can follow the questions in numerical order.
3. Work through Q2, Q3, Q5, Q6 and Q7 at your own pace. Compare each result with its page in `pages/` and understand the effect on a user.
4. Run `npm run test:real-world` when you finish. Open the [full-page audit](tests/real-world/full-page-audit.spec.js) and the [helper guide](docs/04-using-axe-utils.md) to see where the test selects WCAG tags and expects zero violations.
5. Pick a rule from the [axe 4.11 rule catalogue](https://dequeuniversity.com/rules/axe/html/4.11). Use the [WCAG Quick Reference](https://www.w3.org/WAI/WCAG22/quickref/) to look up any success criterion it maps to. Write a Playwright test that runs the rule on a page and explain what you would still check manually.

## Demo tests

| Test                         | What it demonstrates                                       |
| ---------------------------- | ---------------------------------------------------------- |
| `01-first-scan.spec.js`      | Running a broad scan that reports several different issues |
| `02-headings.spec.js`        | Heading-related rules                                      |
| `03-page-title.spec.js`      | Empty or missing page title                                |
| `04-links.spec.js`           | Links without accessible names                             |
| `05-language.spec.js`        | Invalid page language                                      |
| `06-colour-contrast.spec.js` | Low colour contrast                                        |
| `07-axe-limits.spec.js`      | Why automated testing still needs human judgement          |

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

## Formatting and linting

Check formatting and JavaScript code quality locally:

```bash
npm run format:check
npm run lint
```

Apply formatting or ESLint's available automatic fixes:

```bash
npm run format
npm run lint:fix
```

Review the changes after applying fixes. GitHub Actions runs the formatting and lint checks before the Playwright tests on pushes and pull requests targeting `master`.

## Useful commands

```bash
npm test
npm run test:demo
npm run test:real-world
npm run test:headed
npm run test:ui
npm run report
```
