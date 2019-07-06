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

import { alpha } from '../../raw/alpha'
import { RulesConfig } from '../../Contracts'

/**
 * Makes sure the field under validation is alpha only. The regex used is `/^[a-z]+$/i`.
 *
 * ```ts
 * import { validations } from 'indicative/validator'
 *
 * const rules = {
 *   username: 'alpha'
 * }
 *
 * // or
 * const rules = {
 *   username: [
 *     validations.alpha()
 *   ]
 * }
 * ```
 */
const validation: ValidationDefination = {
  async: false,

  validate: (data, field, _args, config: RulesConfig) => {
    const fieldValue = getValue(data, field)
    return skippable(fieldValue, field, config) || alpha(fieldValue)
  },
}

export { validation as default }
