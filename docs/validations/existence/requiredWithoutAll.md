---
permalink: requiredWithoutAll
title: requiredWithoutAll
category: existence
---

Ensures the field is required when all of the other fields has empty values.
 
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