---
permalink: url
title: url
category: validations
---

Ensures the value is a valid URL format.
 
[source, js]
----
const rules = {
  gh_profile: 'url'
}
 
// or
const rules = {
  gh_profile: [
    rule('url')
  ]
}
----