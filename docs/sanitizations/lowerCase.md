---
permalink: lowerCase
title: lowerCase
category: sanitizations
gh_url: https://github.com/poppinss/indicative-rules/tree/develop/src/sanitizations/lowerCase.ts
---

Converts the field value to lower case. Also, this sanitization rule
is locale aware.
 
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
    sanitizations.lowerCase(['fr-CA'])
  ]
}
```