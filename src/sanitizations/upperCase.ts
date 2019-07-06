/**
 * @module indicative-rules
 */

/*
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

type LocaleArg = Parameters<SanitizationRulesContract['upperCase']>[0]

/**
 * Converts a value to upper case. This sanitization rule is locale aware.
 * If value is not a string, then it will return as is.
 *
 * ```ts
 * import { sanitizations } from 'indicative/sanitizer'
 *
 * const sanitizationRules = {
 *   hexCode: 'upper_case'
 * }
 *
 * // or
 * const sanitizationRules = {
 *   hexCode: [
 *     sanitizations.upperCase()
 *   ]
 * }
 * ```
 *
 * You may also specify a locale.
 *
 * ```js
 * const sanitizationRules = {
 *   label: 'upper_case:fr-CA'
 * }
 *
 * // or
 * const sanitizationRules = {
 *   label: [
 *     sanitizations.upperCase(['fr-CA'])
 *   ]
 * }
 */
const upperCase: SanitizationDefination = {
  sanitize (data, field, args: LocaleArg | any[] = []) {
    let fieldValue = getValue(data, field)
    if (typeof (fieldValue) !== 'string') {
      return
    }

    patchValue(data, field, (fieldValue.toLocaleUpperCase as any)(args[0]))
  },
}

export { upperCase as default }
