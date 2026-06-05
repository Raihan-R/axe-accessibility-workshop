# Axe-core has limits

Axe-core is powerful, but it does not understand everything about real user experience.

It can detect many technical accessibility issues, but it cannot fully judge whether:

- instructions are meaningful
- error messages are helpful
- a full user journey is easy to complete
- content makes sense in context
- a screen reader user can comfortably complete a complex interaction

In this repo, `pages/axe-limits.html` is designed to show this point.

The page may pass axe-core checks, but the instruction text is still unclear:

```text
Put the thing in the box, then continue.
```

Axe-core may not report this as a violation, but a human tester should still question whether the instruction is useful.

This is why automated accessibility testing should be combined with manual testing and human judgement.
