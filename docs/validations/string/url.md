---
permalink: url
title: url
category: string
gh_url: https://github.com/poppinss/indicative-rules/tree/develop/src/validations/string/url.ts
---

Enforces the value to be a valid URL.
 
```ts
import { validations } from 'indicative/validator'
 
const rules = {
  gh_profile: 'url'
}
 
// or
const rules = {
  gh_profile: [
    validations.url()
  ]
}
```