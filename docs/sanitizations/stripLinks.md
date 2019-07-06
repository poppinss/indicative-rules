---
permalink: stripLinks
title: stripLinks
category: sanitizations
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