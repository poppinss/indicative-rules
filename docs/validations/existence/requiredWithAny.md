---
permalink: requiredWithAny
title: requiredWithAny
category: existence
---

Ensures the field is required when any of the other fields have non-empty values.
 
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