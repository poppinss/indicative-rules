---
permalink: confirmed
title: confirmed
category: src
gh_url: https://github.com/poppinss/indicative-rules/tree/develop/src/validations/primitives/confirmed.ts
---

Checks whether the field has been confirmed with same value or not using
the `_confirmation` convention. For example:
 
The `password_confirmation` must exist and have the same value as the
`password` field.
 
```ts
import { validations } from 'indicative/validator'
 
const rules = {
  password: 'confirmed'
}
 
// or
const rules = {
  password: [
    validations.confirmed()
  ]
}
```