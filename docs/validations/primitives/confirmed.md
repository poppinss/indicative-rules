---
permalink: confirmed
title: confirmed
category: primitives
---

Ensures a field value as confirmed using a `_confirmation` convention. This is
mainly used for password confirmation field.
 
For example: If the password field name is `password`, then another field called
`password_confirmation` must exist and should have the same value as the actual
field.
 
```ts
import { validations } from 'indicative/validator'
 
const rules = {
  password: 'confirmed'
}
 
// or
const rules = {
  password: [
    rules.confirmed()
  ]
}
```