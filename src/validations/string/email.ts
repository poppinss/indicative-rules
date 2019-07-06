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

import { email } from '../../raw/email'
import { RulesConfig } from '../../Contracts'

/**
 * Ensures the field under validation is a valid email format.
 *
 * NOTE: This validation never checks for the existence of the email address.
 *
 * ```ts
 * import { validations } from 'indicative/validator'
 *
 * const rules = {
 *   email: 'email'
 * }
 *
 * // or
 * const rules = {
 *   email: [
 *     validations.email()
 *   ]
 * }
 * ```
 */
const validation: ValidationDefination = {
  async: false,

  validate: (data, field, _args, config: RulesConfig) => {
    const fieldValue = getValue(data, field)
    return skippable(fieldValue, field, config) || email(fieldValue)
  },
}

export { validation as default }
