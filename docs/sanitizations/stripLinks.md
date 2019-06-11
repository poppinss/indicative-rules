---
permalink: stripLinks
title: stripLinks
category: sanitizations
---

Strips `a` tags from a given string.
 
```js
const sanitizationRules = {
  message: 'strip_links'
}
 
// or
const sanitizationRules = {
  message: [
    rule('strip_links')
  ]
}
```