---
permalink: requiredWithAll
title: requiredWithAll
category: existence
---

Enforces the field value to exist when all of the expected fields exists.
 
```ts
import { validations } from 'indicative/validator'
 
const rules = {
  tax_id: 'required_with_all:car,house'
}
 
// or
const rules = {
  tax_id: [
    validations.requiredWithAll(['car', 'house'])
  ]
}
```