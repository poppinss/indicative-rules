---
permalink: equals
title: equals
category: primitives
---

Enforces the field value to be loosely equal to the given value.
 
```ts
import { validations } from 'indicative/validator'
 
const rules = {
  coupon: 'equals:5050'
}
 
// or
const rules = {
  coupon: [
    validations.equals([5050])
  ]
}
```