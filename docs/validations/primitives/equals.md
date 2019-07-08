---
permalink: equals
title: equals
category: primitives
gh_url: https://github.com/poppinss/indicative-rules/tree/develop/src/validations/primitives/equals.ts
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