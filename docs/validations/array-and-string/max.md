---
permalink: max
title: max
category: array and string
---

Ensure the length of an array or string is not over the defined
length.
 
Validation fails if user input is a not a valid array or string.
 
```js
import { validations } from 'indicative/validator'
 
const rules = {
  username: 'max:40'
}
 
// or
const rules = {
  username: [
    validations.max([40])
  ]
}
```