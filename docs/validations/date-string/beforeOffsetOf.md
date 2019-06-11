---
permalink: beforeOffsetOf
title: beforeOffsetOf
category: validations
---

Ensures the date is before a given offset of a given
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
 
```js
const rules = {
  meetup: 'before_offset_of:4,months'
}
 
// or
const rules = {
  meetup: [
    rules.beforeOffsetOf([4, 'months'])
  ]
}
```