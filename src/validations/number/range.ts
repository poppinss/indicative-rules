/*
* indicative-rules
*
* (c) Harminder Virk <virk@adonisjs.com>
*
* For the full copyright and license information, please view the LICENSE
* file that was distributed with this source code.
*/

import { ensureLength, skippable, cast, getValue } from 'indicative-utils'
import { ValidationDefination } from 'indicative-compiler'

import { between } from '../../raw/between'
import { RulesConfig, RulesContract } from '../../Contracts'

type ComparisonArg = Parameters<RulesContract['range']>[0]

const MISSING_VALUES = 'range:make sure to define min and max values'
const INVALID_TYPE = 'range:min and max values must be defined as integers'

/**
 * Ensures the value of field under validation is under a given range.
 *
 * ```js
 * const rules = {
 *   age: 'range:16,60'
 * }
 *
 * // or
 * const rules = {
 *   age: [
 *     rules.range([16, 60])
 *   ]
 * }
 * ```
 */
const validation: ValidationDefination = {
  async: false,

  compile (args): ComparisonArg {
    ensureLength(args, MISSING_VALUES, 2)
    const min = cast(args[0], 'float', INVALID_TYPE)
    const max = cast(args[1], 'float', INVALID_TYPE)
    return [min, max]
  },

  validate: (data, field, [min, max]: ComparisonArg, config: RulesConfig) => {
    const fieldValue = getValue(data, field)
    return skippable(fieldValue, field, config) || between(fieldValue, [min, max])
  },
}

export { validation as default }
