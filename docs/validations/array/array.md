---
permalink: array
title: array
category: array
---

Checks if field value under validation is a valid Javascript array.
 
```js
import { validations } from 'indicative/validator'
 
const rules = {
  whiteListedUrls: 'array'
}
 
// or
const rules = {
  whiteListedUrls: [
    validations.array()
  ]
}
```