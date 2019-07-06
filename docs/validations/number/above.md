---
permalink: above
title: above
category: number
---

Makes sure the value provided by the end user is above the
expected value.
 
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