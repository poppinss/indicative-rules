---
permalink: range
title: range
category: number
---

Ensures the value of field under validation is under a given range.
 
```ts
import { validations } from 'indicative/validator'
 
const rules = {
  age: 'range:16,60'
}
 
// or
const rules = {
  age: [
    validations.range([16, 60])
  ]
}
```