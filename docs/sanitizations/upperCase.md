---
permalink: upperCase
title: upperCase
category: sanitizations
---

Converts a value to upper case. This sanitization rule is locale aware.
If value is not a string, then it will return as is.
 
```ts
import { sanitizations } from 'indicative/sanitizer'
 
const sanitizationRules = {
  hexCode: 'upper_case'
}
 
// or
const sanitizationRules = {
  hexCode: [
    sanitizations.upperCase()
  ]
}
```
 
You may also specify a locale.
 
```js
const sanitizationRules = {
  label: 'upper_case:fr-CA'
}
 
// or
const sanitizationRules = {
  label: [
    sanitizations.upperCase(['fr-CA'])
  ]
}