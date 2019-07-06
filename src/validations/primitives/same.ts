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

import { existy } from '../../raw/existy'
import { RulesConfig, ValidationRulesContract } from '../../Contracts'

type ComparisonArg = Parameters<ValidationRulesContract['same']>[0]

const MISSING_VALUE = 'same:make sure to define target field for comparison'

/**
 * Ensures the value of 2 fields are same.
 *
 * ```ts
 * import { validations } from 'indicative/validator'
 *
 * const rules = {
 *   password_confirmation: 'same:password'
 * }
 *
 * // or
 * const rules = {
 *   password_confirmation: [
 *     validations.same(['password'])
 *   ]
 * }
 * ```
 */
const validation: ValidationDefination = {
  async: false,

  compile (args): ComparisonArg {
    ensureLength(args, MISSING_VALUE, 1)
    return [String(args[0])]
  },

  validate: (data, field, [targetField]: ComparisonArg, config: RulesConfig) => {
    const fieldValue = getValue(data, field)
    if (skippable(fieldValue, field, config)) {
      return true
    }

    const targetedFieldValue = getValue(data, targetField)
    return !existy(targetedFieldValue) || targetedFieldValue === fieldValue
  },
}

export { validation as default }
