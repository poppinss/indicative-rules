---
permalink: min
title: min
category: array and string
gh_url: https://github.com/poppinss/indicative-rules/tree/develop/src/validations/array-and-string/min.ts
---

Enforces the value to have minimum length as per defined by the rule. The
value type has to be a `string` or `array`, otherwise validation will
fail.
 
```ts
import { validations } from 'indicative/validator'
 
const rules = {
  password: 'min:6'
}
 
// or
const rules = {
  password: [
    validations.min([6])
  ]
}
```