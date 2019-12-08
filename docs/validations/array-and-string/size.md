---
permalink: size
title: size
category: src
gh_url: https://github.com/poppinss/indicative-rules/tree/develop/src/validations/array-and-string/size.ts
---

Enforces the value to have exact length as per defined by the rule. The
value type has to be a `string` or `array`, otherwise validation will
fail.
 
```ts
import { validations } from 'indicative/validator'
 
const rules = {
  username: 'size:40'
}
 
// or
const rules = {
  username: [
    validations.size([40])
  ]
}
```