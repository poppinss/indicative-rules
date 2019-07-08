---
permalink: beforeOffsetOf
title: beforeOffsetOf
category: date string
gh_url: https://github.com/poppinss/indicative-rules/tree/develop/src/validations/date-string/beforeOffsetOf.ts
---

Enforces the field value to be before a given time period offset.
 
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
  meetup: 'date|before_offset_of:4,months'
}
 
// or
const rules = {
  meetup: [
    validations.date(),
    validations.beforeOffsetOf([4, 'months'])
  ]
}
```