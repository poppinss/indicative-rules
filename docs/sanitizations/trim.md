---
permalink: trim
title: trim
category: sanitizations
gh_url: https://github.com/poppinss/indicative-rules/tree/develop/src/sanitizations/trim.ts
---

Removes whitespace from both sides of a given string.
 
```ts
import { sanitizations } from 'indicative/sanitizer'
 
const sanitizationRules = {
  username: 'trim'
}
 
// or
const sanitizationRules = {
  username: [
    sanitizations.trim()
  ]
}
```