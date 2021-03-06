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
 * Enforces the field value to be a valid integer. Validation will
 * fail for values with decimal points, you must use
 * `float` for that.
 *
 * [casts]
 *   [label from="string", to="integer"]
 * [/casts]
 *
 * ```ts
 * import { validations } from 'indicative/validator'
 *
 * const rules = {
 *   age: 'integer'
 * }
 *
 * // or
 * const rules = {
 *   age: [
 *     validations.integer()
 *   ]
 * }
 * ```
 */
const validation: ValidationDefination = {
  async: false,

  validate: (data, field, _args, config: RulesConfig) => {
    let fieldValue = getValue(data, field)
    if (skippable(fieldValue, field, config)) {
      return true
    }

    /**
     * Ensure value is castable to number
     */
    const castedValue = cast(fieldValue, 'integer')
    if (castedValue === null) {
      return false
    }

    /**
     * Ensure that orignal input wasn't with decimals. Use `float` rule
     * to allow decimals
     */
    if (castedValue !== cast(fieldValue, 'float')) {
      return false
    }

    /**
     * Mutate field value
     */
    patchValue(data, field, castedValue)
    return true
  },
}

export { validation as default }
