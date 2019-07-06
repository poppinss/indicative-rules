---
permalink: required
title: required
category: existence
---

Ensures the value of field under validation is not empty. All of the following
values will be considered empty.
 
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