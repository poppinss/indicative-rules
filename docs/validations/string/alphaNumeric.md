---
permalink: alphaNumeric
title: alphaNumeric
category: string
---

Enforces the field value passes the alpha number regex `/^[a-z0-9]+$/i`.
 
```ts
import { validations } from 'indicative/validator'
 
const rules = {
  username: 'alpha_numeric'
}
 
// or
const rules = {
  username: [
    validations.alphaNumeric()
  ]
}
```