---
permalink: requiredWithoutAny
title: requiredWithoutAny
category: validations
---

Ensures the field is required when all of the other fields has empty values.
 
----
const rules = {
  email: 'required_without_any:username,account_id'
}
 
// or
const rules = {
  email: [
    rules.requiredWithoutAny(['username', 'account_id'])
  ]
}
----