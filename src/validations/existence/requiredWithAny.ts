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

type ComparisonArg = Parameters<ValidationRulesContract['requiredWithAny']>[0]

const MISSING_VALUES = 'requiredWithAny:make sure to define one or more target fields'

/**
 * Ensures the field is required when any of the other fields have non-empty values.
 *
 * ```ts
 * import { validations } from 'indicative/validator'
 *
 * const rules = {
 *   password: 'required_with_any:username,email'
 * }
 *
 * // or
 * const rules = {
 *   password: [
 *     validations.requiredWithAny(['username', 'email'])
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
    const matchingField = args.some((item) => existy(getValue(data, item)))
    if (!matchingField) {
      return true
    }

    return !empty(getValue(data, field))
  },
}

export { validation as default }
