---
permalink: float
title: float
category: number
---

Ensures the value is a valid float value.
 
[casts]
 [from label="string"]
 [to label="integer"]
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