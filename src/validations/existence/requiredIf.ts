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

type ComparisonArg = Parameters<ValidationRulesContract['requiredIf']>[0]

const MISSING_VALUE = 'requiredIf:make sure to define target field'

/**
 * The field is checked for required validation, when targeted field exists.
 *
 * ----
 * const rules = {
 *   address: 'required_if:needs_delivery'
 * }
 *
 * // or
 * const rules = {
 *   address: [
 *     rules.requiredIf('needs_delivery')
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

  validate: (data, field, [targetField]: ComparisonArg) => {
    if (!existy(getValue(data, targetField))) {
      return true
    }

    return !empty(getValue(data, field))
  },
}

export { validation as default }
