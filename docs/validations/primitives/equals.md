---
permalink: equals
title: equals
category: primitives
---

Ensures 2 values are lossely same. This validation will not check for the same type, but
instead checks for the same value.
 
Since HTTP request data is always a string, it is better not to perform type checks on it.
 
```ts
import { validations } from 'indicative/validator'
 
const rules = {
  coupon: 'equals:5050'
}
 
// or
const rules = {
  coupon: [
    validations.equals(5050)
  ]
}
```