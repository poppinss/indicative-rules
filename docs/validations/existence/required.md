---
permalink: required
title: required
category: existence
gh_url: https://github.com/poppinss/indicative-rules/tree/develop/src/validations/existence/required.ts
---

Enforces the field value to be not empty. All of the following
values are considered empty.
 
- An empty Object `{}`
- Empty Array `[]`
- Empty string, `null` or `undefined`
 
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