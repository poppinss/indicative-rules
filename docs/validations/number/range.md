---
permalink: range
title: range
category: number
gh_url: https://github.com/poppinss/indicative-rules/tree/develop/src/validations/number/range.ts
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