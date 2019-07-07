---
permalink: array
title: array
category: array
---

Enforces the field value to a valid Javascript array.
 
```ts
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