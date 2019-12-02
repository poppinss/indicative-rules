---
permalink: object
title: object
category: src
gh_url: https://github.com/poppinss/indicative-rules/tree/develop/src/validations/object/object.ts
---

Enforces the field value to be a valid Javascript object.
 
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