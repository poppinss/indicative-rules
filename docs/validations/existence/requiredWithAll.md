---
permalink: requiredWithAll
title: requiredWithAll
category: validations
---

Ensures the field is required when all other fields have non-empty values.
 
----
const rules = {
  tax_id: 'required_with_all:car,house'
}
 
// or
const rules = {
  tax_id: [
    rule.requiredWithAll(['car', 'house'])
  ]
}
----