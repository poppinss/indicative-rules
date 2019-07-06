---
permalink: before
title: before
category: date-string
---

Ensures the value of the field is before the expected date.
This method uses [isBefore](https://date-fns.org/docs/isBefore) function of date-fns.
 
Validation fails if value is not a string or Date object.
 
```ts
import { validations } from 'indicative/validator'
 
const rules = {
  confCall: 'before:2019-11-20'
}
 
// or
const rules = {
  confCall: [
    validations.before(['2019-11-20'])
  ]
}
```