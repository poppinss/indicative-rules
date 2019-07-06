---
permalink: date
title: date
category: date
---

Ensures the field under validation is a valid date. The value can be a
date object or a valid date string.
 
Returns false when value is not a string or date.
 
[casts]
 [from label="string"]
 [to label="date"]
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