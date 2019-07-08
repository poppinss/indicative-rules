---
permalink: escape
title: escape
category: sanitizations
---

Escapes HTML entities. Useful when you want to avoid XSS attacks.
 
This method will only escape `&`, `"`, `'`, `<` and `>` characters. For advance escaping
make use of a 3rd party library like [he](https://github.com/mathiasbynens/he) and
create your own sanitization rule
 
```ts
import { sanitizations } from 'indicative/sanitizer'
 
const sanitizationRules = {
  message: 'escape'
}
 
// or
const sanitizationRules = {
  message: [
    sanitizations.escape()
  ]
}
```
