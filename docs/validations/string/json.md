---
permalink: json
title: json
category: string
---

Enforces the field value is a valid JSON string and can be safely
parsed using `JSON.parse`.
 
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