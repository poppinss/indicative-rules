---
permalink: max
title: max
category: validations
---

Ensure the length of an array or string is not over the defined
length.
 
Validation fails if user input is a not a valid array or string.
 
```js
const rules = {
  username: 'max:40'
}
 
// or
const rules = {
  username: [
    rules.max(40)
  ]
}
```
  Cleaning up user arguments to make sure that they are
  useable at runtime
  Validating runtime data