---
permalink: requiredIf
title: requiredIf
category: validations
---

The field is checked for required validation, when targeted field exists.
 
----
const rules = {
  address: 'required_if:needs_delivery'
}
 
// or
const rules = {
  address: [
    rules.requiredIf('needs_delivery')
  ]
}
----