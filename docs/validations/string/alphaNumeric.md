---
permalink: alphaNumeric
title: alphaNumeric
category: src
gh_url: https://github.com/poppinss/indicative-rules/tree/develop/src/validations/string/alphaNumeric.ts
---

Enforces the field value passes the alpha number regex `/^[a-z0-9]+$/i`.
 
```ts
import { validations } from 'indicative/validator'
 
const rules = {
  username: 'alpha_numeric'
}
 
// or
const rules = {
  username: [
    validations.alphaNumeric()
  ]
}
```