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
import { RulesContract, RulesConfig } from '../../Contracts'
import { beforeOffsetOf } from '../../raw/beforeOffsetOf'

type ComparisonArg = Parameters<RulesContract['beforeOffsetOf']>[0]

const MISSING_VALUES = 'beforeOffsetOf:make sure to define offset unit and key'
const INVALID_AFTER_KEY = 'beforeOffsetOf:2nd argument must be a valid calc key'
const INVALID_AFTER_UNIT = 'beforeOffsetOf:1st argument must be a number'

/**
 * Ensures the date is before a given offset of a given
 * time period. The `period` value has to be one of
 * the following
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
 * ```js
 * const rules = {
 *   meetup: 'before_offset_of:4,months'
 * }
 *
 * // or
 * const rules = {
 *   meetup: [
 *     rules.beforeOffsetOf([4, 'months'])
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
    return skippable(fieldValue, field, config) || beforeOffsetOf(fieldValue, diffUnit, key)
  },
}

export { validation as default }
