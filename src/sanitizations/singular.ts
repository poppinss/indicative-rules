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
import * as pluralize from 'pluralize'

/**
 * Converts a value to it's singular version. If value is not a string
 * then it will be returned as it is.
 *
 * ```ts
 * import { sanitizations } from 'indicative/sanitizer'
 *
 * const sanitizationRules = {
 *   modelName: 'singular'
 * }
 *
 * // or
 * const sanitizationRules = {
 *   modelName: [
 *     sanitizations.singular()
 *   ]
 * }
 * ```
 */
const singular: SanitizationDefination = {
  sanitize (data, field) {
    let fieldValue = getValue(data, field)
    if (typeof (fieldValue) !== 'string') {
      return
    }

    patchValue(data, field, pluralize.singular(fieldValue))
  },
}

export { singular as default }
