---
permalink: integer
title: integer
category: number
---

Ensures the value is a valid integer. Validation will fail for values with
decimal points, you must use `float` for that.
 
[casts]
 [from label="string"]
 [to label="integer"]
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