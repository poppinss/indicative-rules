---
permalink: afterOffsetOf
title: afterOffsetOf
category: date string
---

Ensures the date is after a given offset of a given
time period. The `period` value has to be one of
the following
 
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
  meetup: 'after_offset_of:4,months'
}
 
// or
const rules = {
  meetup: [
    validations.afterOffsetOf([4, 'months'])
  ]
}
```