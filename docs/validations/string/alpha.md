---
permalink: alpha
title: alpha
category: string
---

Makes sure the field under validation is alpha only. The regex used is `/^[a-z]+$/i`.
 
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