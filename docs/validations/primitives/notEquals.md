---
permalink: notEquals
title: notEquals
category: primitives
---

Makes sure that the value of field under validation is not
same as the defined value.
 
```ts
import { validations } from 'indicative/validator'
 
const rules = {
  username: 'not_equals:root'
}
 
// or
const rules = {
  username: [
    validations.notEquals()
  ]
}
```