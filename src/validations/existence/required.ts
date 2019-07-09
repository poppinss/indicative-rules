/*
* indicative-rules
*
* (c) Harminder Virk <virk@adonisjs.com>
*
* For the full copyright and license information, please view the LICENSE
* file that was distributed with this source code.
*/

import { getValue } from 'indicative-utils'
import { ValidationDefination } from 'indicative-compiler'
import { existy } from '../../raw/existy'

/**
 * Enforces the field value to be not empty. Empty string, `null` and `undefined`
 * are considered empty.
 *
 * ```ts
 * import { validations } from 'indicative/validator'
 *
 * const rules = {
 *   username: 'required'
 * }
 *
 * // or
 * const rules = {
 *   username: [
 *     validations.required()
 *   ]
 * }
 * ```
 */
const validation: ValidationDefination = {
  async: false,

  validate: (data, field) => {
    return existy(getValue(data, field))
  },
}

export { validation as default }
