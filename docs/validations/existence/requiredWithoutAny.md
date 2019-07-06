---
permalink: requiredWithoutAny
title: requiredWithoutAny
category: existence
---

Ensures the field is required when all of the other fields has empty values.
 
```ts
import { validations } from 'indicative/validator'
 
const rules = {
  email: 'required_without_any:username,account_id'
}
 
// or
const rules = {
  email: [
    validations.requiredWithoutAny(['username', 'account_id'])
  ]
}
```