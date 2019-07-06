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

const MISSING_VALUE = 'max: make sure to define max length'
const INVALID_TYPE = 'max: length must be defined as an integer'

/**
 * Ensure the length of an array or string is not over the defined
 * length.
 *
 * Validation fails if user input is a not a valid array or string.
 *
 * ```js
 * import { validations } from 'indicative/validator'
 *
 * const rules = {
 *   username: 'max:40'
 * }
 *
 * // or
 * const rules = {
 *   username: [
 *     validations.max([40])
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
  validate: (data, field, [maxLength]: ComparisonArg, config: RulesConfig) => {
    const fieldValue = getValue(data, field)
    if (skippable(fieldValue, field, config)) {
      return true
    }

    if (Array.isArray(fieldValue) || typeof (fieldValue) === 'string') {
      return fieldValue.length <= maxLength
    }

    return false
  },
}

export { validation as default }
