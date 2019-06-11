---
permalink: lowerCase
title: lowerCase
category: sanitizations
---

Converts a value to lower case. This sanitization rule is locale aware.
If value is not a string, then it will return as is.
 
```js
const sanitizationRules = {
  hexCode: 'lowerCase'
}
 
// or
const sanitizationRules = {
  hexCode: [
    rule('lowerCase')
  ]
}
```
 
You may also specify a locale.
 
```js
const sanitizationRules = {
  label: 'lowerCase:fr-CA'
}
 
// or
const sanitizationRules = {
  label: [
    rule('lowerCase', 'fr-CA')
  ]
}
```