---
permalink: trim
title: trim
category: sanitizations
---

Remove whitespace from both sides of a given string.
 
```js
const sanitizationRules = {
  username: 'trim'
}
 
// or
const sanitizationRules = {
  username: [
    rule('trim')
  ]
}
```