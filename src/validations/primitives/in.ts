/*
* indicative-rules
*
* (c) Harminder Virk <virk@adonisjs.com>
*
* For the full copyright and license information, please view the LICENSE
* file that was distributed with this source code.
*/

import { ensureLength, skippable, getValue } from 'indicative-utils'
import { ValidationDefination } from 'indicative-compiler'

import { inArray } from '../../raw/inArray'
import { RulesConfig, ValidationRulesContract } from '../../Contracts'

type ComparisonArg = Parameters<ValidationRulesContract['in']>[0]

const MISSING_VALUE = 'in:make sure to define search collection'

/**
 * Enforces the field value to be one of the allowed values.
 *
 * ```ts
 * import { validations } from 'indicative/validator'
 *
 * const rules = {
 *   post_status: 'in:draft,published'
 * }
 *
 * // or
 * const rules = {
 *   post_status: [
 *     validations.in(['draft', 'published'])
 *   ]
 * }
 * ```ts
 */
const validation: ValidationDefination = {
  async: false,

  compile (args): ComparisonArg {
    ensureLength(args, MISSING_VALUE, 1)
    return args
  },

  validate: (data, field, args: ComparisonArg, config: RulesConfig) => {
    const fieldValue = getValue(data, field)
    return skippable(fieldValue, field, config) || inArray(fieldValue, args)
  },
}

export { validation as default }
