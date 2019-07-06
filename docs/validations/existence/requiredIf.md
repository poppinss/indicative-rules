---
permalink: requiredIf
title: requiredIf
category: existence
---

The field is checked for required validation, when targeted field exists.
 
```ts
import { validations } from 'indicative/validator'
 
const rules = {
  address: 'required_if:needs_delivery'
}
 
// or
const rules = {
  address: [
    validations.requiredIf(['needs_delivery'])
  ]
}
```