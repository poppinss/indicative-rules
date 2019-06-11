---
permalink: requiredWithAny
title: requiredWithAny
category: validations
---

Ensures the field is required when any of the other fields have non-empty values.
 
----
const rules = {
  password: 'required_with_any:username,email'
}
 
// or
const rules = {
  password: [
    rules.requiredWithAny(['username', 'email'])
  ]
}
----