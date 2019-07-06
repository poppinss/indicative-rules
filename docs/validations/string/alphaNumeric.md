---
permalink: alphaNumeric
title: alphaNumeric
category: string
---

Makes sure the field under validation is alpha numeric only.
The regex used is `/^[a-z0-9]+$/i`.
 
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