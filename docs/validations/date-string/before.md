---
permalink: before
title: before
category: src
gh_url: https://github.com/poppinss/indicative-rules/tree/develop/src/validations/date-string/before.ts
---

Enforces the field value to be before the expected date.
This method uses [isBefore](https://date-fns.org/docs/isBefore) function of date-fns.
 
```ts
import { validations } from 'indicative/validator'
 
const rules = {
  confCall: 'date|before:2019-11-20'
}
 
// or
const rules = {
  confCall: [
    validations.date(),
    validations.before(['2019-11-20'])
  ]
}
```