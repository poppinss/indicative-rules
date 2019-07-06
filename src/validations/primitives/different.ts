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

import { existy } from '../../raw'
import { RulesConfig, ValidationRulesContract } from '../../Contracts'

type ComparisonArg = Parameters<ValidationRulesContract['different']>[0]

const MISSING_VALUE = 'different:make sure to define target field for comparison'

/**
 * Ensures the value of the field under validation is always different from
 * the targeted field value.
 *
 * ```ts
 * import { validations } from 'indicative/validator'
 *
 * const rules = {
 *   secondary_email: 'different:primary_email'
 * }
 *
 * // or
 * const rules = {
 *   secondary_email: [
 *     validations.different(['primary_email'])
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

    const targetFieldValue = getValue(data, targetField)
    return !existy(targetFieldValue) || targetFieldValue !== fieldValue
  },
}

export { validation as default }
