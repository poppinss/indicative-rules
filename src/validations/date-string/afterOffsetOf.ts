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

import { dateOffsetKeys } from '../../utils'
import { afterOffsetOf } from '../../raw/afterOffsetOf'
import { ValidationRulesContract, RulesConfig } from '../../Contracts'

type ComparisonArg = Parameters<ValidationRulesContract['afterOffsetOf']>[0]

const MISSING_VALUES = 'afterOffsetOf:make sure to define offset unit and key'
const INVALID_AFTER_KEY = 'afterOffsetOf:2nd argument must be a valid calc key'
const INVALID_AFTER_UNIT = 'afterOffsetOf:1st argument must be a number'

/**
 * Enforces the field value to be after a given time period offset.
 *
 * The `period` value has to be one of the following
 *
 * - years
 * - quarters
 * - months
 * - weeks
 * - days
 * - hours
 * - minutes
 * - seconds
 * - milliseconds
 *
 * ```ts
 * import { validations } from 'indicative/validator'
 *
 * const rules = {
 *   meetup: 'date|after_offset_of:4,months'
 * }
 *
 * // or
 * const rules = {
 *   meetup: [
 *     validations.date(),
 *     validations.afterOffsetOf([4, 'months'])
 *   ]
 * }
 * ```
 */
const validation: ValidationDefination = {
  async: false,

  compile (args: any[]): ComparisonArg {
    ensureLength(args, MISSING_VALUES, 2)
    const diffUnit = cast(args[0], 'integer', INVALID_AFTER_UNIT)

    const key = args[1]
    if (!dateOffsetKeys.includes(key)) {
      throw new Error(INVALID_AFTER_KEY)
    }

    return [Number(diffUnit), key]
  },

  validate: (data, field, [diffUnit, key]: ComparisonArg, config: RulesConfig) => {
    const fieldValue = getValue(data, field)
    return skippable(fieldValue, field, config) || afterOffsetOf(fieldValue, diffUnit, key)
  },
}

export { validation as default }
