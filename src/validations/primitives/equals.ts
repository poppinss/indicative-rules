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
import { RulesConfig, RulesContract } from '../../Contracts'

type ComparisonArg = Parameters<RulesContract['equals']>[0]

const MISSING_VALUE = 'equals:make sure to define the comparison string'

/**
 * Ensures 2 values are lossely same. This validation will not check for the same type, but
 * instead checks for the same value.
 *
 * Since HTTP request data is always a string, it is better not to perform type checks on it.
 *
 * ----
 * const rules = {
 *   coupon: 'equals:5050'
 * }
 *
 * // or
 * const rules = {
 *   coupon: [
 *     rules.equals(5050)
 *   ]
 * }
 * ----
 */
const validation: ValidationDefination = {
  async: false,

  compile (args): ComparisonArg {
    ensureLength(args, MISSING_VALUE, 1)
    return [args[0]]
  },

  validate: (data, field, [comparisonValue]: ComparisonArg, config: RulesConfig) => {
    const fieldValue = getValue(data, field)

    // tslint:disable-next-line:triple-equals
    return skippable(fieldValue, field, config) || comparisonValue == fieldValue
  },
}

export { validation as default }
