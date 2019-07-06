---
permalink: number
title: number
category: number
---

Makes sure that the value of field under validation is a valid
whole number.
 
Validation fails when number has a negative value. You must use `integer`
or `float` rules for that.
 
[casts]
 [from label="string"]
 [to label="number"]
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
    Ensure value is castable to number
    Whole numbers must be greater than zero
    Mutate field value