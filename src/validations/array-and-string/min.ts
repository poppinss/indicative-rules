/*
* indicative-rules
*
* (c) Harminder Virk <virk@adonisjs.com>
*
* For the full copyright and license information, please view the LICENSE
* file that was distributed with this source code.
*/

import { ValidationDefination } from 'indicative-compiler'
import { skippable, cast, ensureLength, getValue } from 'indicative-utils'

import { ValidationRulesContract, RulesConfig } from '../../Contracts'

type ComparisonArg = Parameters<ValidationRulesContract['min']>[0]

const MISSING_VALUE = 'min: make sure to define min length'
const INVALID_TYPE = 'min: length must be defined as an integer'

/**
 * Enforces the value to have minimum length as per defined by the rule. The
 * value type has to be a `string` or `array`, otherwise validation will
 * fail.
 *
 * ```ts
 * import { validations } from 'indicative/validator'
 *
 * const rules = {
 *   password: 'min:6'
 * }
 *
 * // or
 * const rules = {
 *   password: [
 *     validations.min([6])
 *   ]
 * }
 * ```
 */
const validation: ValidationDefination = {
  async: false,

  compile (args: any[]): ComparisonArg {
    ensureLength(args, MISSING_VALUE, 1)
    const minLength = cast(args[0], 'integer', INVALID_TYPE)
    return [minLength]
  },

  validate: (data, field, [minLength]: ComparisonArg, config: RulesConfig) => {
    const fieldValue = getValue(data, field)
    if (skippable(fieldValue, field, config)) {
      return true
    }

    if (Array.isArray(fieldValue) || typeof (fieldValue) === 'string') {
      return fieldValue.length >= minLength
    }

    return false
  },
}

export { validation as default }
