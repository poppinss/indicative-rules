---
permalink: requiredWhen
title: requiredWhen
category: existence
---

The field is checked for required validation, when target field value is same
as the target value.
 
```ts
import { validations } from 'indicative/validator'
 
const rules = {
  state: 'required_when:country,US'
}
 
// or
const rules = {
  state: [
    validations.requiredWhen(['country', 'US'])
  ]
}
```