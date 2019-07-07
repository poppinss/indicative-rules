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

import { truthy } from '../../raw/truthy'
import { RulesConfig } from '../../Contracts'

/**
 * Enforces the field under validation is accepted. Empty strings, `false`, `null`,
 * `0` and `undefined` values will be considered as not accepted.
 *
 * ```ts
 * import { validations } from 'indicative/validator'
 *
 * const rules = {
 *   terms: 'accepted'
 * }
 *
 * // or
 * const rules = {
 *   terms: [
 *     validations.accepted()
 *   ]
 * }
 * ```
 */
const validation: ValidationDefination = {
  async: false,

  validate: (data, field, _args, config: RulesConfig) => {
    const fieldValue = getValue(data, field)
    return skippable(fieldValue, field, config) || truthy(fieldValue)
  },
}

export { validation as default }
