/*
* indicative-rules
*
* (c) Harminder Virk <virk@adonisjs.com>
*
* For the full copyright and license information, please view the LICENSE
* file that was distributed with this source code.
*/

import { skippable, getValue } from 'indicative-utils'
import { ValidationDefination } from 'indicative-compiler'

import { RulesConfig } from '../../Contracts'

/**
 * Enforces the field value to be a valid string.
 *
 * [note]
 *   The values transfered over HTTP are alawys string, which means this
 *   validation will always pass.
 *
 *   However, this validation rule is helpful for raw JSON requests, since
 *   after parsing the JSON strings, the server will get the actual content
 *   types and not a string.
 *
 *   In short, the rule has no impact for `application/x-www-form-urlencoded`, but
 *   helpful for `application/json` content type.
 * [/note]
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

    return typeof (fieldValue) === 'string'
  },
}

export { validation as default }
