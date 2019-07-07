---
permalink: notEquals
title: notEquals
category: primitives
---

Enforces the field value not to be equal to the given value.
 
```ts
import { validations } from 'indicative/validator'
 
const rules = {
  username: 'not_equals:root'
}
 
// or
const rules = {
  username: [
    validations.notEquals(['root'])
  ]
}
```