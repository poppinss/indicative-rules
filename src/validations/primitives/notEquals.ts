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
 * Enforces the field value not to be equal to the given value.
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
 *     validations.notEquals(['root'])
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
    return skippable(fieldValue, field, config) || comparisonValue != fieldValue
  },
}

export { validation as default }
