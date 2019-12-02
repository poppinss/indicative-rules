---
permalink: alpha
title: alpha
category: src
gh_url: https://github.com/poppinss/indicative-rules/tree/develop/src/validations/string/alpha.ts
---

Enforces the field value passes the alpha regex `/^[a-z]+$/i`.
 
```ts
import { validations } from 'indicative/validator'
 
const rules = {
  username: 'alpha'
}
 
// or
const rules = {
  username: [
    validations.alpha()
  ]
}
```