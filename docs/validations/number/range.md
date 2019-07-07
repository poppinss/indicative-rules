---
permalink: range
title: range
category: number
---

Enforces the field value to be under a given range.
 
```ts
import { validations } from 'indicative/validator'
 
const rules = {
  age: 'integer|range:16,60'
}
 
// or
const rules = {
  age: [
    validations.integer(),
    validations.range([16, 60])
  ]
}
```