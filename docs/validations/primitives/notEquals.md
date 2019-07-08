---
permalink: notEquals
title: notEquals
category: primitives
gh_url: https://github.com/poppinss/indicative-rules/tree/develop/src/validations/primitives/notEquals.ts
---

Enforces the field value not to be equal to the given value.
 
```ts
import { validations } from 'indicative/validator'
 
const rules = {
  username: 'not_equals:root'
}
 
// or
const rules = {
  username: [
    validations.notEquals(['root'])
  ]
}
```