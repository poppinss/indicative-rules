---
permalink: number
title: number
category: number
---

Enforces the field value to be a valid whole number.
 
Validation fails when number has a negative value. You must use `integer`
or `float` rules for that.
 
[casts]
  [label from="string", to="integer"]
[/casts]
 
```ts
import { validations } from 'indicative/validator'
 
const rules = {
  game_points: 'number'
}
 
// or
const rules = {
  game_points: [
    validations.number()
  ]
}
```