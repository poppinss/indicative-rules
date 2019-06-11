---
permalink: string
title: string
category: validations
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
 
[source, js]
----
const rules = {
  bio: 'string'
}
 
// or
const rules = {
  password_confirmation: [
    rule('bio', 'string')
  ]
}
----