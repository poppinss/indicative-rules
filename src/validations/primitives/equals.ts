/*
* indicative-rules
*
* (c) Harminder Virk <virk@adonisjs.com>
*
* For the full copyright and license information, please view the LICENSE
* file that was distributed with this source code.
*/

import { ensureLength, skippable, getValue } from 'indicative-utils'
import { ValidationDefination } from 'indicative-compiler'
import { RulesConfig, ValidationRulesContract } from '../../Contracts'

type ComparisonArg = Parameters<ValidationRulesContract['equals']>[0]

const MISSING_VALUE = 'equals:make sure to define the comparison string'

/**
 * Enforces the field value to be loosely equal to the given value.
 *
 * ```ts
 * import { validations } from 'indicative/validator'
 *
 * const rules = {
 *   coupon: 'equals:5050'
 * }
 *
 * // or
 * const rules = {
 *   coupon: [
 *     validations.equals([5050])
 *   ]
 * }
 * ```
 */
const validation: ValidationDefination = {
  async: false,

  compile (args): ComparisonArg {
    ensureLength(args, MISSING_VALUE, 1)
    return [args[0]]
  },

  validate: (data, field, [comparisonValue]: ComparisonArg, config: RulesConfig) => {
    const fieldValue = getValue(data, field)

    /* eslint eqeqeq: "off" */
    return skippable(fieldValue, field, config) || comparisonValue == fieldValue
  },
}

export { validation as default }
