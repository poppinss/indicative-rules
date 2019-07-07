---
permalink: after
title: after
category: date string
---

Enforces the field value to be after the expected date.
This method uses [isAfter](https://date-fns.org/docs/isAfter) function of date-fns.
 
```ts
import { validations } from 'indicative/validator'
 
const rules = {
  confCall: `date|after:${new Date()}`
}
 
// or
const rules = {
  confCall: [
    validations.date(),
    validations.after([new Date()])
  ]
}
```