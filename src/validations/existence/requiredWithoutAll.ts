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

type ComparisonArg = Parameters<ValidationRulesContract['requiredWithoutAll']>[0]

const MISSING_VALUES = 'requiredWithoutAll:make sure to define one or more target fields'

/**
 * Enforces the field value to exist when none of the expected fields exists.
 *
 * ```ts
 * import { validations } from 'indicative/validator'
 *
 * const rules = {
 *   zipcode: 'required_without_all:address,state'
 * }
 *
 * // or
 * const rules = {
 *   zipcode: [
 *     validations.requiredWithoutAll(['address', 'state'])
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
    const hasAnyField = args.some((item) => existy(getValue(data, item)))
    if (hasAnyField) {
      return true
    }

    return !empty(getValue(data, field))
  },
}

export { validation as default }
