---
permalink: requiredWhen
title: requiredWhen
category: src
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
  address: [
    validations.requiredWhen(['checkout_type', 'deliver'])
  ]
}
```
 
You can also define an array of values to match from. For example: Ask for
the `county` when `country=Uk or US`.
 
```ts
import { validations } from 'indicative/validator'
 
const rules = {
  state: [
    validations.requiredWhen(['country', ['UK', 'US']])
  ]
}
```