/*
* indicative-rules
*
* (c) Harminder Virk <virk@adonisjs.com>
*
* For the full copyright and license information, please view the LICENSE
* file that was distributed with this source code.
*/

import { skippable, ensureLength, cast, patchValue, getValue } from 'indicative-utils'
import { ValidationDefination } from 'indicative-compiler'

import { subset } from '../../raw/subset'
import { isString } from '../../raw/isString'
import { RulesConfig, ValidationRulesContract } from '../../Contracts'

type ComparisonArg = Parameters<ValidationRulesContract['subset']>[0]

const MISSING_VALUE = 'subset:make sure to define subset collection'

/**
 * Enforces the value of a given field is a subset of expected values. The
 * field value must be an `array` or a `string` of comma seperated values.
 *
 * [casts]
 *   [label fromText="comma seperated string", from="string", to="array"]
 * [/casts]
 *
 * ```ts
 * import { validations } from 'indicative/validator'
 *
 * const rules = {
 *   sort_by: 'subset:email,id,name'
 * }
 *
 * // or
 * const rules = {
 *   sort_by: [
 *     validations.subset(['email', 'id', 'name'])
 *   ]
 * }
 * ```
 */
const validation: ValidationDefination = {
  async: false,

  compile (args): ComparisonArg {
    ensureLength(args, MISSING_VALUE, 1)
    return args.map((arg) => cast(arg, 'string'))
  },

  validate: (data, field, args: ComparisonArg, config: RulesConfig) => {
    let fieldValue = getValue(data, field)
    if (skippable(fieldValue, field, config)) {
      return true
    }

    /**
     * Convert to array if value is a string
     */
    if (isString(fieldValue)) {
      fieldValue = fieldValue.split(',').map((val: string) => val.trim())
    } else if (Array.isArray(fieldValue)) {
      fieldValue = fieldValue.map((value) => cast(value, 'string'))
    } else {
      return false
    }

    if (!subset(fieldValue, args)) {
      return false
    }

    /**
     * Mutate data field
     */
    patchValue(data, field, fieldValue)
    return true
  },
}

export { validation as default }
