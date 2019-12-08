/*
* indicative-rules
*
* (c) Harminder Virk <virk@adonisjs.com>
*
* For the full copyright and license information, please view the LICENSE
* file that was distributed with this source code.
*/

import { ensureLength, cast, skippable, getValue } from 'indicative-utils'
import { ValidationDefination } from 'indicative-compiler'
import { ValidationRulesContract, RulesConfig } from '../../Contracts'

type ComparisonArg = Parameters<ValidationRulesContract['max']>[0]

const MISSING_VALUE = 'size: make sure to define length value'
const INVALID_TYPE = 'size: length must be defined as an integer'

/**
 * Enforces the value to have exact length as per defined by the rule. The
 * value type has to be a `string` or `array`, otherwise validation will
 * fail.
 *
 * ```ts
 * import { validations } from 'indicative/validator'
 *
 * const rules = {
 *   username: 'size:40'
 * }
 *
 * // or
 * const rules = {
 *   username: [
 *     validations.size([40])
 *   ]
 * }
 * ```
 */
const validation: ValidationDefination = {
  async: false,

  /**
   * Cleaning up user arguments to make sure that they are
   * useable at runtime
   */
  compile (args: any[]): ComparisonArg {
    ensureLength(args, MISSING_VALUE, 1)
    const maxLength = cast(args[0], 'integer', INVALID_TYPE)
    return [maxLength]
  },

  /**
   * Validating runtime data
   */
  validate: (data, field, [size]: ComparisonArg, config: RulesConfig) => {
    const fieldValue = getValue(data, field)
    if (skippable(fieldValue, field, config)) {
      return true
    }

    if (Array.isArray(fieldValue) || typeof (fieldValue) === 'string') {
      return fieldValue.length === size
    }

    return false
  },
}

export { validation as default }
