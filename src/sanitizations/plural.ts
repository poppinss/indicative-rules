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
 * Converts a value to it's plural version. If value is not a string
 * then it will return as it is.
 *
 * ```js
 * const sanitizationRules = {
 *   controllerName: 'plural'
 * }
 *
 * // or
 * const sanitizationRules = {
 *   controllerName: [
 *     rule('plural')
 *   ]
 * }
 * ```
 */
const plural: SanitizationDefination = {
  sanitize (data, field) {
    let fieldValue = getValue(data, field)
    if (typeof (fieldValue) !== 'string') {
      return
    }

    patchValue(data, field, pluralize(fieldValue))
  },
}

export { plural as default }
