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

type ComparisonArg = Parameters<ValidationRulesContract['notEquals']>[0]

const MISSING_VALUE = 'notEquals:make sure to define comparison value'

/**
 * Makes sure that the value of field under validation is not
 * same as the defined value.
 *
 * ```ts
 * import { validations } from 'indicative/validator'
 *
 * const rules = {
 *   username: 'not_equals:root'
 * }
 *
 * // or
 * const rules = {
 *   username: [
 *     validations.notEquals()
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

    // tslint:disable-next-line:triple-equals
    return skippable(fieldValue, field, config) || comparisonValue != fieldValue
  },
}

export { validation as default }
