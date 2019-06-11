---
permalink: affirmative
title: affirmative
category: raw
---

 Returns true if the `input` is one of the affirmative keywords.
 Below is the list of case insensitive keywords except `A`.
 
 - 'yes'
 - 'true', treu
 - 'y'
 - 'ok'
 - 'okay'
 - 'A'
 
```js
const { is } = require('indicative')
 
if (is.affirmative('y')) {
}
```