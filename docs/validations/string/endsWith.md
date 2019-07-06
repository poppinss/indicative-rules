---
permalink: endsWith
title: endsWith
category: string
---

Ensure the value of field under validation ends with a certain substr. This
validation will also trim whitespaces before making the check
 
```ts
import { validations } from 'indicative/validator'
 
const rules = {
  reg_no: 'ends_with:qaw'
}
 
// or
const rules = {
  reg_no: [
    validations.endsWith('qaw')
  ]
}
```