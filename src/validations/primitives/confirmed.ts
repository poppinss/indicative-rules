/*
* indicative-rules
*
* (c) Harminder Virk <virk@adonisjs.com>
*
* For the full copyright and license information, please view the LICENSE
* file that was distributed with this source code.
*/

import { skippable, cast, getValue } from 'indicative-utils'
import { ValidationDefination } from 'indicative-compiler'

import { same } from '../../raw/same'
import { RulesConfig } from '../../Contracts'

function castType (input: any, type: string): any {
  if (type === 'string') {
    return cast(input, 'string')
  }

  if (type === 'number') {
    return cast(input, 'integer')
  }

  return input
}

/**
 * Checks whether the field has been confirmed with same value or not using
 * the `_confirmation` convention. For example:
 *
 * The `password_confirmation` must exist and have the same value as the
 * `password` field.
 *
 * ```ts
 * import { validations } from 'indicative/validator'
 *
 * const rules = {
 *   password: 'confirmed'
 * }
 *
 * // or
 * const rules = {
 *   password: [
 *     validations.confirmed()
 *   ]
 * }
 * ```
 */
const validation: ValidationDefination = {
  async: false,

  validate: (data, field, _args, config: RulesConfig) => {
    const fieldValue = getValue(data, field)
    if (skippable(fieldValue, field, config)) {
      return true
    }

    const valueType = typeof (fieldValue)
    let comparisonValue = getValue(data, `${field}_confirmation`)

    /**
     * Cast type of comparison value when types are different. This is important
     * since the end-user has no way to cast type of confirmed field. For example:
     *
     * 1. Add `number` rule to the `pincode` field, which will cast the pincode to `number`.
     * 2. Also add `confirmed` rule to `pincode`, now you cannot cast it's value, so we
     *    need to do type conversion here.
     */
    if (typeof (comparisonValue) !== valueType) {
      comparisonValue = castType(comparisonValue, valueType)
    }

    return same(fieldValue, comparisonValue)
  },
}

export { validation as default }
