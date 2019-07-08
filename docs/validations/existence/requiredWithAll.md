---
permalink: requiredWithAll
title: requiredWithAll
category: existence
gh_url: https://github.com/poppinss/indicative-rules/tree/develop/src/validations/existence/requiredWithAll.ts
---

Enforces the field value to exist when all of the expected fields exists.
 
```ts
import { validations } from 'indicative/validator'
 
const rules = {
  tax_id: 'required_with_all:car,house'
}
 
// or
const rules = {
  tax_id: [
    validations.requiredWithAll(['car', 'house'])
  ]
}
```