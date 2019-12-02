---
permalink: array
title: array
category: src
gh_url: https://github.com/poppinss/indicative-rules/tree/develop/src/validations/array/array.ts
---

Enforces the field value to a valid Javascript array.
 
```ts
import { validations } from 'indicative/validator'
 
const rules = {
  whiteListedUrls: 'array'
}
 
// or
const rules = {
  whiteListedUrls: [
    validations.array()
  ]
}
```