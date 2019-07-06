/**
 * @module indicative-rules
 */

/*
* indicative-rules
*
* (c) Harminder Virk <virk@adonisjs.com>
*
* For the full copyright and license information, please view the LICENSE
* file that was distributed with this source code.
*/

import { SanitizationDefination } from 'indicative-compiler'
import { getValue, patchValue } from 'indicative-utils'

/**
 * Escapes HTML entities. Useful when you want to avoid XSS attacks.
 *
 * This method will only remove `&`, `"`, `'`, `<` and `>` characters. For advance escaping
 * make use of a 3rd party library like [he](https://github.com/mathiasbynens/he).
 *
 * ```ts
 * import { sanitizations } from 'indicative/sanitizer'
 *
 * const sanitizationRules = {
 *   message: 'escape'
 * }
 *
 * // or
 * const sanitizationRules = {
 *   message: [
 *     sanitizations.escape()
 *   ]
 * }
 * ```
 */
const escape: SanitizationDefination = {
  sanitize (data, field) {
    let fieldValue = getValue(data, field)
    if (typeof (fieldValue) !== 'string') {
      return
    }

    fieldValue = fieldValue
      .replace(/&/g, '&amp;') // replace &
      .replace(/"/g, '&quot;') // replace "
      .replace(/'/g, '&#x27;') // replace '
      .replace(/</g, '&lt;') // replace <
      .replace(/>/g, '&gt;') // replace >

    patchValue(data, field, fieldValue)
  },
}

export { escape as default }
