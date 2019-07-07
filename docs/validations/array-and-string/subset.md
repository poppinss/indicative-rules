---
permalink: subset
title: subset
category: array and string
---

Enforces the value of a given field is a subset of expected values. The
field value must be an `array` or a `string` of comma seperated values.
 
[casts]
  [label fromText="comma seperated string", from="string", to="array"]
[/casts]
 
```ts
import { validations } from 'indicative/validator'
 
const rules = {
  sort_by: 'subset:email,id,name'
}
 
// or
const rules = {
  sort_by: [
    validations.subset(['email', 'id', 'name'])
  ]
}
```