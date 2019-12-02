---
permalink: slug
title: slug
category: src
gh_url: https://github.com/poppinss/indicative-rules/tree/develop/src/sanitizations/slug.ts
---

Converts a string to a URL friendly slug. If value is not a string, it will be
returned as it is.
 
Also it will handle ascii charmaps and converts them to their utf-8 counter parts.
 
```text
I am > than you
```
 
will become
 
```text
i-am-greater-than-you
```
 
```ts
import { sanitizations } from 'indicative/sanitizer'
 
const sanitizationRules = {
  slug: 'slug'
}
 
// or
const sanitizationRules = {
  slug: [
    sanitizations.slug()
  ]
}
```