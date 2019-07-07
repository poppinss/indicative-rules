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
import { RulesConfig, ValidationRulesContract } from '../../Contracts'

type ComparisonArg = Parameters<ValidationRulesContract['range']>[0]

const MISSING_VALUES = 'range:make sure to define min and max values'
const INVALID_TYPE = 'range:min and max values must be defined as integers'

/**
 * Enforces the field value to be under a given range.
 *
 * ```ts
 * import { validations } from 'indicative/validator'
 *
 * const rules = {
 *   age: 'integer|range:16,60'
 * }
 *
 * // or
 * const rules = {
 *   age: [
 *     validations.integer(),
 *     validations.range([16, 60])
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
