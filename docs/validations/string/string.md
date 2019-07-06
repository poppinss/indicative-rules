---
permalink: string
title: string
category: string
---

Ensures the value is a string.
 
Validation fails when value isn't a string or cannot be casted
to a string value
 
[casts]
 [from label="number"]
 [to label="string"]
[/casts]
 
[casts]
 [from label="boolean"]
 [to label="string"]
[/casts]
 
[casts]
 [from label="array"]
 [to label="string"]
[/casts]
 
[casts]
 [from label="date"]
 [to label="string"]
[/casts]
 
```ts
import { validations } from 'indicative/validator'
 
const rules = {
  bio: 'string'
}
 
// or
const rules = {
  bio: [
    validations.string()
  ]
}
```