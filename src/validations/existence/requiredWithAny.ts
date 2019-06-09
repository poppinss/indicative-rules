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
import { RulesContract } from '../../Contracts'

type ComparisonArg = Parameters<RulesContract['requiredWithAny']>[0]

const MISSING_VALUES = 'requiredWithAny:make sure to define one or more target fields'

/**
 * Ensures the field is required when any of the other fields have non-empty values.
 *
 * ----
 * const rules = {
 *   password: 'required_with_any:username,email'
 * }
 *
 * // or
 * const rules = {
 *   password: [
 *     rules.requiredWithAny(['username', 'email'])
 *   ]
 * }
 * ----
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
