---
permalink: accepted
title: accepted
category: string
---

Enforces the field under validation is accepted. Empty strings, `false`, `null`,
`0` and `undefined` values will be considered as not accepted.
 
```ts
import { validations } from 'indicative/validator'
 
const rules = {
  terms: 'accepted'
}
 
// or
const rules = {
  terms: [
    validations.accepted()
  ]
}
```