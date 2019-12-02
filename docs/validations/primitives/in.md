---
permalink: in
title: in
category: src
gh_url: https://github.com/poppinss/indicative-rules/tree/develop/src/validations/primitives/in.ts
---

Enforces the field value to be one of the allowed values.
 
```ts
import { validations } from 'indicative/validator'
 
const rules = {
  post_status: 'in:draft,published'
}
 
// or
const rules = {
  post_status: [
    validations.in(['draft', 'published'])
  ]
}
```ts