---
permalink: date
title: date
category: date
gh_url: https://github.com/poppinss/indicative-rules/tree/develop/src/validations/date/date.ts
---

Enforces the field value to be a valid date. The rule will
cast the `string` values to a Javascript date object.
 
[casts]
  [label from="string", to="date"]
[/casts]
 
Following is the list of formats that passes validations
 
- 2015-03-25  (ISO Date)
- 03/25/2015  (Short Date)
- Mar 25 2015 (Long Date)
- 25 Mar 2015 (Long Date)
 
```ts
import { validations } from 'indicative/validator'
 
const rules = {
  login_at: 'date'
}
 
// or
const rules = {
  login_at: [
    validations.date()
  ]
}
```