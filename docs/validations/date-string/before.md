---
permalink: before
title: before
category: validations
---

Ensures the value of the field is before the expected date.
This method uses [isBefore](https://date-fns.org/docs/isBefore) function of date-fns.
 
Validation fails if value is not a string or Date object.
 
```js
const rules = {
  confCall: 'before:2018-11-20'
}
 
// or
const rules = {
  confCall: [
    rules.before(new Date().setDate(new Date().getMonth() + 12))
  ]
}
```