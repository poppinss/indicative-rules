---
permalink: requiredWithoutAll
title: requiredWithoutAll
category: existence
---

Enforces the field value to exist when none of the expected fields exists.
 
```ts
import { validations } from 'indicative/validator'
 
const rules = {
  zipcode: 'required_without_all:address,state'
}
 
// or
const rules = {
  zipcode: [
    validations.requiredWithoutAll(['address', 'state'])
  ]
}
```