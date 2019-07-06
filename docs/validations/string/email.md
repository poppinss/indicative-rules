---
permalink: email
title: email
category: string
---

Ensures the field under validation is a valid email format.
 
NOTE: This validation never checks for the existence of the email address.
 
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