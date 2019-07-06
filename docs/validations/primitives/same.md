---
permalink: same
title: same
category: primitives
---

Ensures the value of 2 fields are same.
 
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