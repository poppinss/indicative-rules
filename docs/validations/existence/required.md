---
permalink: required
title: required
category: existence
gh_url: https://github.com/poppinss/indicative-rules/tree/develop/src/validations/existence/required.ts
---

Enforces the field value to be not empty. Empty string, `null` and `undefined`
are considered empty.
 
```ts
import { validations } from 'indicative/validator'
 
const rules = {
  username: 'required'
}
 
// or
const rules = {
  username: [
    validations.required()
  ]
}
```