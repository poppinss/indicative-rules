---
permalink: max
title: max
category: array and string
gh_url: https://github.com/poppinss/indicative-rules/tree/develop/src/validations/array-and-string/max.ts
---

Enforces the value to have maximum length as per defined by the rule. The
value type has to be a `string` or `array`, otherwise validation will
fail.
 
```ts
import { validations } from 'indicative/validator'
 
const rules = {
  username: 'max:40'
}
 
// or
const rules = {
  username: [
    validations.max([40])
  ]
}
```