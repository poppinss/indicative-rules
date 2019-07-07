---
permalink: required
title: required
category: existence
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