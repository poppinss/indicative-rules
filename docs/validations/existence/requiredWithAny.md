---
permalink: requiredWithAny
title: requiredWithAny
category: existence
---

Enforces the field value to exist when any of the expected fields exists.
 
```ts
import { validations } from 'indicative/validator'
 
const rules = {
  password: 'required_with_any:username,email'
}
 
// or
const rules = {
  password: [
    validations.requiredWithAny(['username', 'email'])
  ]
}
```