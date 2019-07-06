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
import { existy } from '../../raw/existy'
import { ValidationRulesContract } from '../../Contracts'

type ComparisonArg = Parameters<ValidationRulesContract['requiredWithAll']>[0]

const MISSING_VALUES = 'requiredWithAll:make sure to define one or more target fields'

/**
 * Ensures the field is required when all other fields have non-empty values.
 *
 * ```ts
 * import { validations } from 'indicative/validator'
 *
 * const rules = {
 *   tax_id: 'required_with_all:car,house'
 * }
 *
 * // or
 * const rules = {
 *   tax_id: [
 *     validations.requiredWithAll(['car', 'house'])
 *   ]
 * }
 * ```
 */
const validation: ValidationDefination = {
  async: false,

  compile (args): ComparisonArg {
    ensureLength(args, MISSING_VALUES, 1)
    return args.map((arg) => String(arg))
  },

  validate: (data, field, args: ComparisonArg) => {
    const missingField = args.some((item) => !existy(getValue(data, item)))
    if (missingField) {
      return true
    }

    return !empty(getValue(data, field))
  },
}

export { validation as default }
