---
permalink: upperCase
title: upperCase
category: sanitizations
---

Converts a value to upper case. This sanitization rule is locale aware.
If value is not a string, then it will return as is.
 
```js
const sanitizationRules = {
  hexCode: 'upperCase'
}
 
// or
const sanitizationRules = {
  hexCode: [
    rule('upperCase')
  ]
}
```
 
You may also specify a locale.
 
```js
const sanitizationRules = {
  label: 'upperCase:fr-CA'
}
 
// or
const sanitizationRules = {
  label: [
    rule('upperCase', 'fr-CA')
  ]
}