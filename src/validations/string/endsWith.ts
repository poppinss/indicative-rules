/*
* indicative-rules
*
* (c) Harminder Virk <virk@adonisjs.com>
*
* For the full copyright and license information, please view the LICENSE
* file that was distributed with this source code.
*/

import { skippable, ensureLength, getValue } from 'indicative-utils'
import { ValidationDefination } from 'indicative-compiler'

import { RulesConfig, ValidationRulesContract } from '../../Contracts'

type ComparisonArg = Parameters<ValidationRulesContract['endsWith']>[0]

const MISSING_VALUE = 'endsWith:make sure to define substring'

/**
 * Ensure the value of field under validation ends with a certain substr. This
 * validation will also trim whitespaces before making the check
 *
 * [source, js]
 * ----
 * const rules = {
 *   reg_no: 'ends_with:qaw'
 * }
 *
 * // or
 * const rules = {
 *   reg_no: [
 *     rule('ends_with', 'qaw')
 *   ]
 * }
 * ----
 */
const validation: ValidationDefination = {
  async: false,

  compile (args): ComparisonArg {
    ensureLength(args, MISSING_VALUE, 1)
    return [String(args[0])]
  },

  validate: (data, field, [substring]: ComparisonArg, config: RulesConfig) => {
    const fieldValue = getValue(data, field)
    if (skippable(fieldValue, field, config)) {
      return true
    }

    if (typeof (fieldValue) !== 'string') {
      return false
    }

    return fieldValue.endsWith(substring)
  },
}

export { validation as default }
