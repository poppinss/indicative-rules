---
permalink: integer
title: integer
category: validations
---

Ensures the value is a valid integer. Validation will fail for values with
decimal points, you must use `float` for that.
 
[casts]
 [from label="string"]
 [to label="integer"]
[/casts]
 
[source, js]
----
const rules = {
  age: 'integer'
}
 
// or
const rules = {
  age: [
    rules.integer()
  ]
}
----
    Ensure value is castable to number
    Ensure that orignal input wasn't with decimals. Use `float` rule
    to allow decimals
    Mutate field value