---
permalink: float
title: float
category: number
---

Enforce the field value to be valid float value. This rule will
cast the string representation of number to a float value.
 
[casts]
  [label from="string", to="integer", toText="float"]
[/casts]
 
```ts
import { validations } from 'indicative/validator'
 
const rules = {
  age: 'float'
}
 
// or
const rules = {
  age: [
    validations.float()
  ]
}
```