---
permalink: regex
title: regex
category: src
gh_url: https://github.com/poppinss/indicative-rules/tree/develop/src/validations/string/regex.ts
---

Enforces the field value to pass a custom regular expression.
 
```ts
import { validations } from 'indicative/validator'
 
const rules = {
  username: [
    validations.regex(['^[a-z]+'])
  ]
}
 
// or
const rules = {
  username: [
    validations.regex([new RegExp('^  [a-z]+')])
  ]
}
```