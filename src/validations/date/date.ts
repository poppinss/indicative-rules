/*
* indicative-rules
*
* (c) Harminder Virk <virk@adonisjs.com>
*
* For the full copyright and license information, please view the LICENSE
* file that was distributed with this source code.
*/

import { cast, skippable, patchValue, getValue } from 'indicative-utils'
import { ValidationDefination } from 'indicative-compiler'
import { RulesConfig } from '../../Contracts'

/**
 * Enforces the field value to be a valid date. The rule will
 * cast the `string` values to a Javascript date object.
 *
 * [casts]
 *   [label from="string", to="date"]
 * [/casts]
 *
 * Following is the list of formats that passes validations
 *
 * - 2015-03-25  (ISO Date)
 * - 03/25/2015  (Short Date)
 * - Mar 25 2015 (Long Date)
 * - 25 Mar 2015 (Long Date)
 *
 * ```ts
 * import { validations } from 'indicative/validator'
 *
 * const rules = {
 *   login_at: 'date'
 * }
 *
 * // or
 * const rules = {
 *   login_at: [
 *     validations.date()
 *   ]
 * }
 * ```
 */
const validation: ValidationDefination = {
  async: false,

  validate: (data, field, _args, config: RulesConfig) => {
    const fieldValue = getValue(data, field)
    if (skippable(fieldValue, field, config)) {
      return true
    }

    const castedValue = cast(fieldValue, 'date')
    if (castedValue === null) {
      return false
    }

    patchValue(data, field, castedValue)
    return true
  },
}

export { validation as default }
