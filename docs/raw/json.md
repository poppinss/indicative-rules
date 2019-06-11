---
permalink: json
title: json
category: raw
---

Returns a boolean telling if value is a valid JSON string
or not.
 
```js
const { is } = require('indicative')
 
if (is.json("{ \"hello\": \"world\" }")) {
}
```