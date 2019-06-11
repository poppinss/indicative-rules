---
permalink: escape
title: escape
category: sanitizations
---

Escapes HTML entities. Useful when you want to avoid XSS attacks.
 
This method will only remove `&`, `"`, `'`, `<` and `>` characters. For advance escaping
make use of a 3rd party library like [he](https://github.com/mathiasbynens/he).
 
```js
const sanitizationRules = {
  message: 'escape'
}
 
// or
const sanitizationRules = {
  message: [
    rule('escape')
  ]
}
```