---
permalink: requiredIf
title: requiredIf
category: existence
gh_url: https://github.com/poppinss/indicative-rules/tree/develop/src/validations/existence/requiredIf.ts
---

Enforces the field value to exist when the target field exists. For example:
Ask for `address` when value for `needs_delivery` exists.
 
```ts
import { validations } from 'indicative/validator'
 
const rules = {
  address: 'required_if:needs_delivery'
}
 
// or
const rules = {
  address: [
    validations.requiredIf(['needs_delivery'])
  ]
}
```