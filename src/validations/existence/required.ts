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
import { empty } from '../../raw/empty'

/**
 * Ensures the value of field under validation is not empty. All of the following
 * values will be considered empty.
 *
 * - An empty Object `{}`
 * - Empty Array `[]`
 * - Empty string, `null` or `undefined`
 *
 * ----
 * const rules = {
 *   username: 'required'
 * }
 *
 * // or
 * const rules = {
 *   username: [
 *     rules.required()
 *   ]
 * }
 * ----
 */
const validation: ValidationDefination = {
  async: false,

  validate: (data, field) => {
    return !empty(getValue(data, field))
  },
}

export { validation as default }
