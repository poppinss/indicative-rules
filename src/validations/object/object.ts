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

import { isObject } from '../../raw/isObject'
import { RulesConfig } from '../../Contracts'

/**
 * Enforces the field value to be a valid Javascript object.
 *
 * The validation will fail for `Arrays`, though they are objects too in Javascript.
 *
 * ```ts
 * import { validations } from 'indicative/validator'
 *
 * const rules = {
 *   user: 'object'
 * }
 *
 * // or
 * const rules = {
 *   user: [
 *     validations.object()
 *   ]
 * }
 * ```
 */
const validation: ValidationDefination = {
  async: false,

  validate: (data, field, _args, config: RulesConfig) => {
    const fieldValue = getValue(data, field)
    return skippable(fieldValue, field, config) || isObject(fieldValue)
  },
}

export { validation as default }
