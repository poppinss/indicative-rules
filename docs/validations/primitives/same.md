---
permalink: same
title: same
category: primitives
gh_url: https://github.com/poppinss/indicative-rules/tree/develop/src/validations/primitives/same.ts
---

Enforces the field value to be same as the targeted field
value.
 
```ts
import { validations } from 'indicative/validator'
 
const rules = {
  password_confirmation: 'same:password'
}
 
// or
const rules = {
  password_confirmation: [
    validations.same(['password'])
  ]
}
```