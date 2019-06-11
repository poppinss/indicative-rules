---
permalink: float
title: float
category: validations
---

Ensures the value is a valid float value.
 
[casts]
 [from label="string"]
 [to label="integer"]
[/casts]
 
[source, js]
----
const rules = {
  age: 'float'
}
 
// or
const rules = {
  age: [
    rules.float()
  ]
}
----
    Ensure value is castable to number
    Mutate field value