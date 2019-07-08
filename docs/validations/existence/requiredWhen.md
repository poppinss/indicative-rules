---
permalink: requiredWhen
title: requiredWhen
category: existence
gh_url: https://github.com/poppinss/indicative-rules/tree/develop/src/validations/existence/requiredWhen.ts
---

Enforces the field value to exist when the target field value matches the given
value. For example: Ask for `address` when value for `checkout_type=deliver`.
 
```ts
import { validations } from 'indicative/validator'
 
const rules = {
  address: 'required_when:checkout_type,deliver'
}
 
// or
const rules = {
  state: [
    validations.requiredWhen(['checkout_type', 'deliver'])
  ]
}
```