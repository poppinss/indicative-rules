---
permalink: object
title: object
category: validations
---

Ensures the value of field under validation is a valid Javascript
object.
 
The validation will fail for `Arrays`, though they are objects too in Javascript.
----
const rules = {
  user: 'object'
}
 
// or
const rules = {
  user: [
    rule('object')
  ]
}
----