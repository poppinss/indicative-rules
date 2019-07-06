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

import { above as isAbove } from '../../raw/above'
import { ValidationRulesContract, RulesConfig } from '../../Contracts'

type ComparisonArg = Parameters<ValidationRulesContract['above']>[0]

const MISSING_VALUE = 'above:make sure to define minValue'
const INVALID_TYPE = 'above:min value must be defined as an integer'

/**
 * Makes sure the value provided by the end user is above the
 * expected value.
 *
 * ```ts
 * import { validations } from 'indicative/validator'
 *
 * const rules = {
 *   age: 'number|above:20'
 * }
 *
 * // or
 * const rules = {
 *   age: [
 *     validations.number(),
 *     validations.above([20])
 *   ]
 * }
 * ```
 */
const validation: ValidationDefination = {
  async: false,

  compile (args: any[]): ComparisonArg {
    ensureLength(args, MISSING_VALUE, 1)
    const minValue = cast(args[0], 'integer', INVALID_TYPE)
    return [minValue]
  },

  validate: (data, field, [minValue]: ComparisonArg, config: RulesConfig): boolean => {
    const fieldValue = getValue(data, field)
    return skippable(fieldValue, field, config) || isAbove(fieldValue, minValue)
  },
}

export { validation as default }
