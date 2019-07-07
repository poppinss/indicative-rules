---
permalink: regex
title: regex
category: string
---

Enforces the field value to pass a custom regular expression.
 
```ts
import { validations } from 'indicative/validator'
 
const rules = {
  username: [
    validations.regex(['^[a-z]+'])
  ]
}
 
// or
const rules = {
  username: [
    validations.regex([new RegExp('^  [a-z]+')])
  ]
}
```