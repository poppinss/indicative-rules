---
permalink: above
title: above
category: number
---

Enforces the field value to be above the defined value.
 
```ts
import { validations } from 'indicative/validator'
 
const rules = {
  age: 'number|above:20'
}
 
// or
const rules = {
  age: [
    validations.number(),
    validations.above([20])
  ]
}
```