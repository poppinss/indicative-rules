---
permalink: json
title: json
category: raw
gh_url: https://github.com/poppinss/indicative-rules/tree/develop/src/raw/json.ts
---

Returns a boolean telling if value is a valid JSON string
or not.
 
```js
const { is } = require('indicative')
 
if (is.json("{ \"hello\": \"world\" }")) {
}
```