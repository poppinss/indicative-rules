---
permalink: requiredWithAll
title: requiredWithAll
category: existence
---

Ensures the field is required when all other fields have non-empty values.
 
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