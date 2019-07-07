---
permalink: afterOffsetOf
title: afterOffsetOf
category: date string
---

Enforces the field value to be after a given time period offset.
 
The `period` value has to be one of the following
 
- years
- quarters
- months
- weeks
- days
- hours
- minutes
- seconds
- milliseconds
 
```ts
import { validations } from 'indicative/validator'
 
const rules = {
  meetup: 'date|after_offset_of:4,months'
}
 
// or
const rules = {
  meetup: [
    validations.date(),
    validations.afterOffsetOf([4, 'months'])
  ]
}
```