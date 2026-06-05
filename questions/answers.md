# Answer guide

These are suggested answers. Learners may phrase their answers differently.

## 01 First scan

The scan should report at least one violation. The exact output may vary depending on the axe-core version, but learners should be able to identify the rule ID, impact, description, and affected elements.

## 02 Headings

The page uses a paragraph styled to look like a heading. This may trigger `p-as-heading`. It also has an unusual heading structure. Semantic heading elements help assistive technology users understand the structure of a page.

## 03 Page title

The rule is `document-title`. The page has an empty title. A meaningful page title helps users understand where they are, especially when switching tabs or navigating with assistive technology.

## 04 Links

The rule is `link-name`. The empty anchor has no accessible name. Links need meaningful names so users understand the purpose of the link.

## 05 Language

The rule is `html-lang-valid`. The page uses an invalid language code. The language attribute helps assistive technologies choose the correct pronunciation and interpretation.

## 06 Colour contrast

The rule is `color-contrast`. The text has poor contrast against the background. This can make content difficult to read, especially for users with low vision or colour vision deficiencies.

## 07 Axe-core limits

The page may pass axe-core checks, but the instruction text is unclear. Automated testing cannot always determine whether content is meaningful or whether a real user can complete a journey comfortably. Manual testing is still needed.
