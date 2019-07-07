---
permalink: under
title: under
category: number
---

Enforces the field value to be under the defined value.
 
```ts
import { validations } from 'indicative/validator'
 
const rules = {
  age: 'integer|under:60'
}
 
// or
const rules = {
  age: [
    validations.integer(),
    validations.under(60)
  ]
}
```