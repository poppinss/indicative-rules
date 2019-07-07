---
permalink: requiredWithoutAny
title: requiredWithoutAny
category: existence
---

Enforces the field value to exist when any of the expected fields are
missing.
 
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