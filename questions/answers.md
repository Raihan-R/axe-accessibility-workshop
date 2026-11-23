# Answer guide

These are suggested answers.

## 01 First scan

The broad scan should report multiple violations, including `image-alt` for the image without alternative text, `label` for the email input and `button-name` for the empty button. These affect how screen reader users identify the image, field and action. The exact output may vary with the axe-core version.

The paragraph saying “Email address” provides a visual prompt but does not programmatically label the input. A `<label for="email">` associated with the input's ID would provide that relationship.

## 02 Headings

The page uses a paragraph styled to look like a heading. This may trigger `p-as-heading`. It also has an unusual heading structure. Semantic heading elements help assistive technology users understand the structure of a page.

## 03 Page title

The rule is `document-title`. The page has an empty title. A meaningful page title helps users understand where they are, especially when switching tabs or navigating with assistive technology.

## 04 Links

The rule is `link-name`. The link to `/case/456` has no accessible name, so a screen reader user cannot identify its purpose from the name. “Click here” has an accessible name and passes this rule. A tester still needs to assess whether the link and its context make its purpose clear under WCAG 2.4.4.

“View case 123” and “View case 456” would distinguish the links. If two links share a name and have different destinations, check whether the surrounding context makes each purpose clear. Reusing a name can be appropriate when links have the same purpose.

## 05 Language

The rule is `html-lang-valid`. The page uses an invalid language code. The language attribute helps assistive technologies choose the correct pronunciation and interpretation.

## 06 Colour contrast

The rule is `color-contrast`. The text has poor contrast against the background. This can make content difficult to read, especially for users with low vision or colour vision deficiencies.

## 07 Axe-core limits

The page may pass axe-core checks, but the instruction text is unclear. Automated testing cannot always determine whether content is meaningful or whether a real user can complete a journey comfortably. Manual testing is still needed.
