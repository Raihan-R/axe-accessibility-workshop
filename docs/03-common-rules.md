# Common axe-core rules in this repo

This repo demonstrates a small set of common axe-core rules.

## `document-title`

Checks that the page has a non-empty `<title>` element.

This matters because page titles help users understand where they are, especially when navigating between pages or browser tabs.

## `link-name`

Checks that links have accessible names.

For example, an empty link or a link with no meaningful text may be difficult for assistive technology users to understand.

## `p-as-heading`

Checks whether a paragraph appears to be styled as a heading.

This matters because visual styling alone does not create a semantic heading structure.

## `heading-order`

Checks whether heading levels are skipped in a way that may confuse the page structure.

## `page-has-heading-one`

Checks that the page contains an `<h1>`.

## `html-lang-valid`

Checks that the `lang` attribute uses a valid language code.

## `color-contrast`

Checks that text has sufficient contrast against its background.
