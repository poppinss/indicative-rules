---
permalink: above
title: above
category: validations
---

Makes sure the value provided by the end user is above the
expected value.
 
Make sure to cast the user input value to `number` before using this
rule by using `number` rule.
 
----
const rules = {
  age: 'number|above:20'
}
 
// or
const rules = {
  age: [
    rules.number(),
    rules.above(20)
  ]
}
----