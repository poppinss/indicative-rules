---
permalink: subset
title: subset
category: array and string
---

Ensures the value of a given field is a
subset of expected values.
 
[casts]
 [from label="string"]
 [to label="array"]
[/casts]
 
[casts]
 [from label="array items"]
 [to label="string values"]
[/casts]
 
```ts
import { validations } from 'indicative/validator'
 
const rules = {
  include: 'subset:foo,bar,baz'
}
 
// or
const rules = {
  include: [
    validations.subset(['foo', 'bar', 'baz'])
  ]
}
```
 
SUBJECTIVE: PLEASE RE-CHECK (MORE OF A ARRAY RULE)