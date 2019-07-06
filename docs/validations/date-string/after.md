---
permalink: after
title: after
category: date-string
---

Ensures the value of the field is after the expected date.
This method uses [isAfter](https://date-fns.org/docs/isAfter) function of date-fns.
 
Validation fails if value is not a string or Date object.
 
```ts
import { validations } from 'indicative/validator'
 
const rules = {
  confCall: `after:${new Date()}`
}
 
// or
const rules = {
  confCall: [
    validations.after([new Date()])
  ]
}
```