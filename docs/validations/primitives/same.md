---
permalink: same
title: same
category: primitives
---

Enforces the field value to be same as the targeted field
value.
 
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