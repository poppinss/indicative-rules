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
import * as striptags from 'striptags'
import { SanitizationRulesContract } from '../Contracts'

type StripTagsArg = Parameters<SanitizationRulesContract['stripTags']>[0]

/**
 * Strips HTML tags from a string. If value is not a string, it will be returned
 * as it is.
 *
 * ```js
 * const sanitizationRules = {
 *   message: 'strip_tags'
 * }
 *
 * // or
 * const sanitizationRules = {
 *   message: [
 *     rule('strip_tags')
 *   ]
 * }
 * ```
 *
 * Also you can pass an array of whitelisted tags.
 *
 * ```js
 * const sanitizationRules = {
 *   message: 'strip_tags:a,img'
 * }
 *
 * // or
 * const sanitizationRules = {
 *   message: [
 *     rule('strip_tags', ['a', 'img'])
 *   ]
 * }
 * ```
 */
const stripTags: SanitizationDefination = {
  sanitize (data, field, args: StripTagsArg | any[] = []) {
    let fieldValue = getValue(data, field)
    if (typeof (fieldValue) !== 'string') {
      return
    }

    patchValue(data, field, striptags(fieldValue, args))
  },
}

export { stripTags as default }
