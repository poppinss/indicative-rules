---
permalink: notIn
title: notIn
category: primitives
---

Enforces the field value not to be one of the allowed values.
 
```ts
import { validations } from 'indicative/validator'
 
const rules = {
  username: 'not_in:root,admin,super'
}
 
// or
const rules = {
  username: [
    validations.notIn(['root', 'admin', 'super'])
  ]
}
```