---
permalink: email
title: email
category: string
gh_url: https://github.com/poppinss/indicative-rules/tree/develop/src/validations/string/email.ts
---

Enforces the field under validation is a valid email format.
 
```ts
import { validations } from 'indicative/validator'
 
const rules = {
  email: 'email'
}
 
// or
const rules = {
  email: [
    validations.email()
  ]
}
```