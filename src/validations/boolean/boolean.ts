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
 * Enforces the field value to be a valid boolean representation. The rule will
 * attempt to cast following values to their boolean counter part.
 *
 * [casts]
 *  [label fromText="string ('0')", from="string", to="boolean", toText="boolean (false)"]
 *   [label fromText="string ('1')", from="string", to="boolean", toText="boolean (true)"]
 *   [label fromText="string ('false')", from="string", to="boolean", toText="boolean (false)"]
 *   [label fromText="string ('true')", from="string", to="boolean", toText="boolean (true)"]
 *   [label fromText="number ('0')", from="integer", to="boolean", toText="boolean (false)"]
 *   [label fromText="number ('1')", from="integer", to="boolean", toText="boolean (true)"]
 * [/casts]
 *
 * ```ts
 * import { validations } from 'indicative/validator'
 *
 * const rules = {
 *   remember_me: 'boolean'
 * }
 *
 * // or
 * const rules = {
 *   remember_me: [
 *     validations.boolean()
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
