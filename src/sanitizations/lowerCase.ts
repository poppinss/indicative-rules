/**
 * indicative-rules
 *
 * (c) Harminder Virk <virk@adonisjs.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { SanitizationDefination } from 'indicative-compiler'
import { getValue, patchValue } from 'indicative-utils'
import { SanitizationRulesContract } from '../Contracts'

type LocaleArg = Parameters<SanitizationRulesContract['lowerCase']>[0]

/**
 * Converts a value to lower case. This sanitization rule is locale aware.
 * If value is not a string, then it will return as is.
 *
 * ```js
 * const sanitizationRules = {
 *   hexCode: 'lowerCase'
 * }
 *
 * // or
 * const sanitizationRules = {
 *   hexCode: [
 *     rule('lowerCase')
 *   ]
 * }
 * ```
 *
 * You may also specify a locale.
 *
 * ```js
 * const sanitizationRules = {
 *   label: 'lowerCase:fr-CA'
 * }
 *
 * // or
 * const sanitizationRules = {
 *   label: [
 *     rule('lowerCase', 'fr-CA')
 *   ]
 * }
 * ```
 */
const lowerCase: SanitizationDefination = {
  sanitize (data, field, args: LocaleArg | any[] = []) {
    let fieldValue = getValue(data, field)
    if (typeof (fieldValue) !== 'string') {
      return
    }

    patchValue(data, field, (fieldValue.toLocaleLowerCase as any)(args[0]))
  },
}

export { lowerCase as default }
