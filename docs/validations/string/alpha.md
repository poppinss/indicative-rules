---
permalink: alpha
title: alpha
category: string
---

Enforces the field value passes the alpha regex `/^[a-z]+$/i`.
 
```ts
import { validations } from 'indicative/validator'
 
const rules = {
  username: 'alpha'
}
 
// or
const rules = {
  username: [
    validations.alpha()
  ]
}
```