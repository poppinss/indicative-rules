---
permalink: lowerCase
title: lowerCase
category: sanitizations
---

Converts a value to lower case. This sanitization rule is locale aware.
If value is not a string, then it will return as is.
 
```ts
import { sanitizations } from 'indicative/sanitizer'
 
const sanitizationRules = {
  hexCode: 'lower_case'
}
 
// or
const sanitizationRules = {
  hexCode: [
    sanitizations.lowerCase()
  ]
}
```
 
You may also specify a locale.
 
```ts
import { sanitizations } from 'indicative/sanitizer'
 
const sanitizationRules = {
  label: 'lower_case:fr-CA'
}
 
// or
const sanitizationRules = {
  label: [
    sanitizations.lowerCase()
  ]
}
```