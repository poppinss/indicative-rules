---
permalink: requiredWhen
title: requiredWhen
category: validations
---

The field is checked for required validation, when target field value is same
as the target value.
 
----
const rules = {
  state: 'required_when:country,US'
}
 
// or
const rules = {
  state: [
    rules.requiredWhen(['country', 'US'])
  ]
}
----