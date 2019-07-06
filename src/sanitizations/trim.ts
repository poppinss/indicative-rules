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
 * Remove whitespace from both sides of a given string.
 *
 * ```ts
 * import { sanitizations } from 'indicative/sanitizer'
 *
 * const sanitizationRules = {
 *   username: 'trim'
 * }
 *
 * // or
 * const sanitizationRules = {
 *   username: [
 *     sanitizations.trim()
 *   ]
 * }
 * ```
 */
const trim: SanitizationDefination = {
  sanitize (data, field) {
    let fieldValue = getValue(data, field)
    if (typeof (fieldValue) !== 'string') {
      return
    }

    patchValue(data, field, fieldValue.trim())
  },
}

export { trim as default }
