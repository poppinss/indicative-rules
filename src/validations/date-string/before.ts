/*
* indicative-rules
*
* (c) Harminder Virk <virk@adonisjs.com>
*
* For the full copyright and license information, please view the LICENSE
* file that was distributed with this source code.
*/

import { ensureLength, cast, skippable, getValue } from 'indicative-utils'
import { ValidationDefination } from 'indicative-compiler'

import { before } from '../../raw/before'
import { ValidationRulesContract, RulesConfig } from '../../Contracts'

type ComparsionArgs = Parameters<ValidationRulesContract['before']>[0]

const MISSING_VALUE = 'before:make sure to define the before date'
const INVALID_TYPE = 'before:before date must be defined as string or date object'

/**
 * Ensures the value of the field is before the expected date.
 * This method uses [isBefore](https://date-fns.org/docs/isBefore) function of date-fns.
 *
 * Validation fails if value is not a string or Date object.
 *
 * ```ts
 * import { validations } from 'indicative/validator'
 *
 * const rules = {
 *   confCall: 'before:2019-11-20'
 * }
 *
 * // or
 * const rules = {
 *   confCall: [
 *     validations.before(['2019-11-20'])
 *   ]
 * }
 * ```
 */
const validation: ValidationDefination = {
  async: false,

  compile (args: any[]): ComparsionArgs {
    ensureLength(args, MISSING_VALUE, 1)
    const beforeDate = cast(args[0], 'date', INVALID_TYPE)
    return [beforeDate]
  },

  validate: (data, field, [beforeDate]: ComparsionArgs, config: RulesConfig) => {
    const fieldValue = getValue(data, field)
    return skippable(fieldValue, field, config) || before(fieldValue, beforeDate)
  },
}

export { validation as default }
