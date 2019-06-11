---
permalink: confirmed
title: confirmed
category: validations
---

Ensures a field value as confirmed using a `_confirmation` convention. This is
mainly used for password confirmation field.
 
For example: If the password field name is `password`, then another field called
`password_confirmation` must exist and should have the same value as the actual
field.
 
----
const rules = {
  password: 'confirmed'
}
 
// or
const rules = {
  password: [
    rules.confirmed()
  ]
}
----
    Cast type of comparison value when types are different. This is important
    since the end-user has no way to cast type of confirmed field. For example:
   
    1. Add `number` rule to the `pincode` field, which will cast the pincode to `number`.
    2. Also add `confirmed` rule to `pincode`, now you cannot cast it's value, so we
       need to do type conversion here.