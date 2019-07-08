---
permalink: integer
title: integer
category: number
gh_url: https://github.com/poppinss/indicative-rules/tree/develop/src/validations/number/integer.ts
---

Enforces the field value to be a valid integer. Validation will
fail for values with decimal points, you must use
`float` for that.
 
[casts]
  [label from="string", to="integer"]
[/casts]
 
```ts
import { validations } from 'indicative/validator'
 
const rules = {
  age: 'integer'
}
 
// or
const rules = {
  age: [
    validations.integer()
  ]
}
```