---
permalink: notIn
title: notIn
category: primitives
---

Makes sure that the value of field under validation is not
from one of the defined values.
 
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