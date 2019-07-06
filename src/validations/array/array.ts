/*
* indicative-rules
*
* (c) Harminder Virk <virk@adonisjs.com>
*
* For the full copyright and license information, please view the LICENSE
* file that was distributed with this source code.
*/

import { skippable, getValue } from 'indicative-utils'
import { ValidationDefination } from 'indicative-compiler'
import { RulesConfig } from '../../Contracts'

/**
 * Checks if field value under validation is a valid Javascript array.
 *
 * ```js
 * import { validations } from 'indicative/validator'
 *
 * const rules = {
 *   whiteListedUrls: 'array'
 * }
 *
 * // or
 * const rules = {
 *   whiteListedUrls: [
 *     validations.array()
 *   ]
 * }
 * ```
 */
const validation: ValidationDefination = {
  async: false,
  validate: (data, field) => {
    const fieldValue = getValue(data, field)
    const config: RulesConfig = { existyStrict: true }
    return skippable(fieldValue, field, config) || Array.isArray(fieldValue)
  },
}

export { validation as default }
