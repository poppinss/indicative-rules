---
permalink: json
title: json
category: string
---

Ensures the value of field under validation is safe to be parsed
using `JSON.parse` method.
 
```ts
import { validations } from 'indicative/validator'
 
const rules = {
  payload: 'json'
}
 
// or
const rules = {
  payload: [
    validations.json()
  ]
}
```