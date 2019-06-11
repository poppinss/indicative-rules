---
permalink: alpha
title: alpha
category: validations
---

Makes sure the field under validation is alpha only. The regex used is `/^[a-z]+$/i`.
 
[source, js]
----
const rules = {
  username: 'alpha'
}
 
// or
const rules = {
  username: [
    rule('alpha')
  ]
}
----