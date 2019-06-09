/*
* indicative-rules
*
* (c) Harminder Virk <virk@adonisjs.com>
*
* For the full copyright and license information, please view the LICENSE
* file that was distributed with this source code.
*/

import { ensureLength, getValue } from 'indicative-utils'
import { ValidationDefination } from 'indicative-compiler'

import { empty } from '../../raw/empty'
import { RulesContract } from '../../Contracts'

type ComparisonArg = Parameters<RulesContract['requiredWhen']>[0]

const MISSING_VALUES = 'requiredWhen:make sure to define target field and it\'s expected value'

/**
 * The field is checked for required validation, when target field value is same
 * as the target value.
 *
 * ----
 * const rules = {
 *   state: 'required_when:country,US'
 * }
 *
 * // or
 * const rules = {
 *   state: [
 *     rules.requiredWhen(['country', 'US'])
 *   ]
 * }
 * ----
 */
const validation: ValidationDefination = {
  async: false,

  compile (args): ComparisonArg {
    ensureLength(args, MISSING_VALUES, 2)
    return [String(args[0]), args[1]]
  },

  validate: (data, field, [targetField, expectedValue]: ComparisonArg) => {
    const otherValue = getValue(data, targetField)

    // tslint:disable-next-line:triple-equals
    if (empty(otherValue) || expectedValue != otherValue) {
      return true
    }

    return !empty(getValue(data, field))
  },
}

export { validation as default }
