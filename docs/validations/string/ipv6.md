---
permalink: ipv6
title: ipv6
category: src
gh_url: https://github.com/poppinss/indicative-rules/tree/develop/src/validations/string/ipv6.ts
---

Enforces the field value is a valid `ipv6` address.
 
```ts
import { validations } from 'indicative/validator'
 
const rules = {
  ip_address: 'ipv6'
}
 
// or
const rules = {
  ip_address: [
    validations.ipv6()
  ]
}
```