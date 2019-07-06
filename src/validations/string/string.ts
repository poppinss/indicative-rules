/*
* indicative-rules
*
* (c) Harminder Virk <virk@adonisjs.com>
*
* For the full copyright and license information, please view the LICENSE
* file that was distributed with this source code.
*/

import { skippable, patchValue, cast, getValue } from 'indicative-utils'
import { ValidationDefination } from 'indicative-compiler'

import { RulesConfig } from '../../Contracts'

/**
 * Ensures the value is a string.
 *
 * Validation fails when value isn't a string or cannot be casted
 * to a string value
 *
 * [casts]
 *  [from label="number"]
 *  [to label="string"]
 * [/casts]
 *
 * [casts]
 *  [from label="boolean"]
 *  [to label="string"]
 * [/casts]
 *
 * [casts]
 *  [from label="array"]
 *  [to label="string"]
 * [/casts]
 *
 * [casts]
 *  [from label="date"]
 *  [to label="string"]
 * [/casts]
 *
 * ```ts
 * import { validations } from 'indicative/validator'
 *
 * const rules = {
 *   bio: 'string'
 * }
 *
 * // or
 * const rules = {
 *   bio: [
 *     validations.string()
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

    const castedValue = cast(fieldValue, 'string')
    if (castedValue === null) {
      return false
    }

    patchValue(data, field, castedValue)
    return true
  },
}

export { validation as default }
