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

import { json } from '../../raw/json'
import { RulesConfig } from '../../Contracts'

/**
 * Ensures the value of field under validation is safe to be parsed
 * using `JSON.parse` method.
 *
 * ```ts
 * import { validations } from 'indicative/validator'
 *
 * const rules = {
 *   payload: 'json'
 * }
 *
 * // or
 * const rules = {
 *   payload: [
 *     validations.json()
 *   ]
 * }
 * ```
 */
const validation: ValidationDefination = {
  async: false,

  validate: (data, field, _args, config: RulesConfig) => {
    const fieldValue = getValue(data, field)
    return skippable(fieldValue, field, config) || json(fieldValue)
  },
}

export { validation as default }
