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
import { alphaNumeric } from '../../raw/alphaNumeric'

/**
 * Makes sure the field under validation is alpha numeric only.
 * The regex used is `/^[a-z0-9]+$/i`.
 *
 * [source, js]
 * ----
 * const rules = {
 *   username: 'alpha_numeric'
 * }
 *
 * // or
 * const rules = {
 *   username: [
 *     rule('alpha_numeric')
 *   ]
 * }
 * ----
 */
const validation: ValidationDefination = {
  async: false,

  validate: (data, field, _args, config: RulesConfig) => {
    const fieldValue = getValue(data, field)
    return skippable(fieldValue, field, config) || alphaNumeric(fieldValue)
  },
}

export { validation as default }
