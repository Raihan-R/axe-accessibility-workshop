# Common axe-core rules in this repo

| Rule                   | What axe-core checks                                           | User impact                                                                             | WCAG mapping or best practice                                   |
| ---------------------- | -------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| `document-title`       | The page has a non-empty `<title>`.                            | Page titles help users identify pages and distinguish browser tabs.                     | 2.4.2 Page Titled (A)                                           |
| `link-name`            | Links have discernible accessible names.                       | Screen reader users can identify named links as they navigate.                          | 2.4.4 Link Purpose (In Context) and 4.1.2 Name, Role, Value (A) |
| `p-as-heading`         | An experimental rule flags paragraphs that look like headings. | Screen reader users can miss these sections when navigating by headings.                | 1.3.1 Info and Relationships (A)                                |
| `heading-order`        | Heading levels increase by at most one level at a time.        | A logical outline helps screen reader users understand how sections fit together.       | Deque best practice                                             |
| `page-has-heading-one` | A level-one heading is present.                                | Screen reader users can find the main topic by navigating to the top-level heading.     | Deque best practice                                             |
| `html-lang-valid`      | The document's `lang` value uses a valid language code.        | Assistive technology uses language metadata to choose pronunciation.                    | 3.1.1 Language of Page (A)                                      |
| `color-contrast`       | Text has sufficient contrast against its background.           | Sufficient contrast makes text easier to read, particularly for people with low vision. | 1.4.3 Contrast (Minimum) (AA)                                   |

Use [Q4 Links](../questions/04-links.md) to practice comparing an axe rule with the WCAG requirement it helps test. The [axe 4.11 rule catalogue](https://dequeuniversity.com/rules/axe/html/4.11) lists the available rules and tags.
