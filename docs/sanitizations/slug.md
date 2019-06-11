---
permalink: slug
title: slug
category: sanitizations
---

Converts a string to URL friendly slug. If value is not a string, it will be
returned as it is.
 
Also it will handle ascii charmaps and converts to their utf-8 counter parts.
 
```text
I am > than you
```
 
will become
 
```text
i-am-greater-than-you
```
 
```js
const sanitizationRules = {
  slug: 'slug'
}
 
// or
const sanitizationRules = {
  slug: [
    rule('slug')
  ]
}
```