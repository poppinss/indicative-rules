---
permalink: min
title: min
category: array and string
---

Ensure the length of an array or string is greater than the defined
length.
 
Validation fails if user input is a not a valid array or string.
 
```js
import { validations } from 'indicative/validator'
 
const rules = {
  password: 'min:6'
}
 
// or
const rules = {
  password: [
    validations.min([6])
  ]
}
```