---
permalink: equals
title: equals
category: validations
---

Ensures 2 values are lossely same. This validation will not check for the same type, but
instead checks for the same value.
 
Since HTTP request data is always a string, it is better not to perform type checks on it.
 
----
const rules = {
  coupon: 'equals:5050'
}
 
// or
const rules = {
  coupon: [
    rules.equals(5050)
  ]
}
----