---
permalink: includes
title: includes
category: src
gh_url: https://github.com/poppinss/indicative-rules/tree/develop/src/validations/string/includes.ts
---

Enforces the field value to include a given substring.
 
```ts
import { validations } from 'indicative/validator'
 
const rules = {
  url: 'includes:adonisjs.com'
}
 
// or
const rules = {
  url: [
    validations.includes(['adonisjs.com'])
  ]
}
```