---
permalink: dateFormat
title: dateFormat
category: src
gh_url: https://github.com/poppinss/indicative-rules/tree/develop/src/validations/date-string/dateFormat.ts
---

Ensures the date or date time is valid as the per the defined formats.
 
This method will import [format](https://date-fns.org/v1.29.0/docs/format) method from dateFns.
 
### Note
Following steps are performed to strip the timezone from the actual date
and then format the date. Keeping timezones will result in different
output, even when the format is correct.
 
1. Timezone is only stripped when the date format expects timezone to
   be present.
2. `Z` and `ZZ` identifiers replaces their expected counter parts.
3. Also date can have `Z`, which is equivalent to `+00:00`.
4. If we will not strip the timezone offset from the actual date, then
   dateFns will format it in local timezone causing invalid date
   comparison.
5. Validation will also fail, when format expects a timezone but missing
   in original date.
 
```ts
import { validations } from 'indicative/validator'
 
const rules = {
  publish_at: [
    validations.dateFormat(['YYYY-MM-DD HH:mm:ss'])
  ]
}
```