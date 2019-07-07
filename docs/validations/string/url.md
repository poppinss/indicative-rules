---
permalink: url
title: url
category: string
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