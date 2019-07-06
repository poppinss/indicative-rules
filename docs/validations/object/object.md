---
permalink: object
title: object
category: object
---

Ensures the value of field under validation is a valid Javascript
object.
 
The validation will fail for `Arrays`, though they are objects too in Javascript.
 
```ts
import { validations } from 'indicative/validator'
 
const rules = {
  user: 'object'
}
 
// or
const rules = {
  user: [
    validations.object()
  ]
}
```