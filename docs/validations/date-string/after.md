---
permalink: after
title: after
category: validations
---

Ensures the value of the field is after the expected date.
This method uses [isAfter](https://date-fns.org/docs/isAfter) function of date-fns.
 
Validation fails if value is not a string or Date object.
 
```js
const rules = {
  confCall: `after:${new Date()}`
}
 
// or
const rules = {
  confCall: [
    rules.after(new Date())
  ]
}
```