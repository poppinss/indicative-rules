---
permalink: upperCase
title: upperCase
category: sanitizations
gh_url: https://github.com/poppinss/indicative-rules/tree/develop/src/sanitizations/upperCase.ts
---

Converts the field value to upper case. Also, this sanitization rule
is locale aware.
 
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