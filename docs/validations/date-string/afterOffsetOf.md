---
permalink: afterOffsetOf
title: afterOffsetOf
category: validations
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
 
```js
const rules = {
  meetup: 'after_offset_of:4,months'
}
 
// or
const rules = {
  meetup: [
    rules.afterOffsetOf([4, 'months'])
  ]
}
```