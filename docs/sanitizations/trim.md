---
permalink: trim
title: trim
category: sanitizations
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