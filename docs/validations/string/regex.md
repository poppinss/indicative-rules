---
permalink: regex
title: regex
category: string
---

Ensures the value of field under validation, passes the regex test. The regex
can be defined as a string or a RegExp object.
 
NOTE: For complex `regex`, always use the `rule` method.
 
```ts
import { validations } from 'indicative/validator'
 
const rules = {
  age: [
    rule('regex', /[a-z]+/)
  ]
}
 
// or
const rules = {
  age: [
    validations.regex([new RegExp('[a-z]+')])
  ]
}
```