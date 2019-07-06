---
permalink: different
title: different
category: primitives
---

Ensures the value of the field under validation is always different from
the targeted field value.
 
```ts
import { validations } from 'indicative/validator'
 
const rules = {
  secondary_email: 'different:primary_email'
}
 
// or
const rules = {
  secondary_email: [
    validations.different(['primary_email'])
  ]
}
```