---
permalink: endsWith
title: endsWith
category: string
gh_url: https://github.com/poppinss/indicative-rules/tree/develop/src/validations/string/endsWith.ts
---

Enforces the value of field under validation ends with a certain `substring`.
This validation will also trim whitespaces before making the check.
 
```ts
import { validations } from 'indicative/validator'
 
const rules = {
  reg_no: 'ends_with:qaw'
}
 
// or
const rules = {
  reg_no: [
    validations.endsWith(['qaw'])
  ]
}
```