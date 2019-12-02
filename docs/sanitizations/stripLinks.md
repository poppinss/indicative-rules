---
permalink: stripLinks
title: stripLinks
category: src
gh_url: https://github.com/poppinss/indicative-rules/tree/develop/src/sanitizations/stripLinks.ts
---

Strips `a` tags from a given string.
 
```ts
import { sanitizations } from 'indicative/sanitizer'
 
const sanitizationRules = {
  message: 'strip_links'
}
 
// or
const sanitizationRules = {
  message: [
    sanitizations.stripLinks()
  ]
}
```