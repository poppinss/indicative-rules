---
permalink: email
title: email
category: string
---

Enforces the field under validation is a valid email format.
 
```ts
import { validations } from 'indicative/validator'
 
const rules = {
  email: 'email'
}
 
// or
const rules = {
  email: [
    validations.email()
  ]
}
```