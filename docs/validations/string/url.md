---
permalink: url
title: url
category: string
---

Ensures the value is a valid URL format.
 
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