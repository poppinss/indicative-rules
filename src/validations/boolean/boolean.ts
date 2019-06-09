/*
* indicative-rules
*
* (c) Harminder Virk <virk@adonisjs.com>
*
* For the full copyright and license information, please view the LICENSE
* file that was distributed with this source code.
*/

import { ValidationDefination } from 'indicative-compiler'
import { cast, skippable, patchValue, getValue } from 'indicative-utils'

import { RulesConfig } from '../../Contracts'

/**
 * Ensures the value of a field is a valid boolean representation.
 *
 * Validation fails, if value isn't a boolean and also unable to
 * cast value to boolean.
 *
 * [casts]
 *  [from label="string ('0')"]
 *  [to label="boolean (false)"]
 * [/casts]
 *
 * [casts]
 *  [from label="string ('1')"]
 *  [to label="boolean (true)"]
 * [/casts]
 *
 * [casts]
 *  [from label="string ('false')"]
 *  [to label="boolean (false)"]
 * [/casts]
 *
 * [casts]
 *  [from label="string ('true')"]
 *  [to label="boolean (true)"]
 * [/casts]
 *
 * [casts]
 *  [from label="number (0)"]
 *  [to label="boolean (false)"]
 * [/casts]
 *
 * [casts]
 *  [from label="number (1)"]
 *  [to label="boolean (true)"]
 * [/casts]
 *
 * ```js
 * const rules = {
 *   remember_me: 'boolean'
 * }
 *
 * // or
 * const rules = {
 *   remember_me: [
 *     rules.boolean()
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

    const castedValue = cast(fieldValue, 'boolean')
    if (castedValue === null) {
      return false
    }

    /**
     * We mutate the value to a boolean when it is castable
     * to a boolean.
     */
    patchValue(data, field, castedValue)
    return true
  },
}

export { validation as default }
