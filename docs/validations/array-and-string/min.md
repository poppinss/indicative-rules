---
permalink: min
title: min
category: validations
---

Ensure the length of an array or string is greater than the defined
length.
 
Validation fails if user input is a not a valid array or string.
 
```js
const rules = {
  password: 'min:6'
}
 
// or
const rules = {
  password: [
    rules.min(6)
  ]
}
```