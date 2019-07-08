---
permalink: notIn
title: notIn
category: primitives
gh_url: https://github.com/poppinss/indicative-rules/tree/develop/src/validations/primitives/notIn.ts
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