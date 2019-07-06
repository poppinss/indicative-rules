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

import { ip } from '../../raw/ip'
import { RulesConfig } from '../../Contracts'

/**
 * Ensures the value is a valid ip address as per `ipv4` and `ipv6` specs.
 *
 * ```ts
 * import { validations } from 'indicative/validator'
 *
 * const rules = {
 *   ip_address: 'ip'
 * }
 *
 * // or
 * const rules = {
 *   ip_address: [
 *     validations.ip()
 *   ]
 * }
 * ```
 */
const validation: ValidationDefination = {
  async: false,

  validate: (data, field, _args, config: RulesConfig) => {
    const fieldValue = getValue(data, field)
    return skippable(fieldValue, field, config) || ip(fieldValue)
  },
}

export { validation as default }
