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

const linksRegex = /<a\b[^>]*>(.*?)<\/a>/g

/**
 * Strips `a` tags from a given string.
 *
 * ```ts
 * import { sanitizations } from 'indicative/sanitizer'
 *
 * const sanitizationRules = {
 *   message: 'strip_links'
 * }
 *
 * // or
 * const sanitizationRules = {
 *   message: [
 *     sanitizations.stripLinks()
 *   ]
 * }
 * ```
 */
const stripLinks: SanitizationDefination = {
  sanitize (data, field) {
    let fieldValue = getValue(data, field)
    if (typeof (fieldValue) !== 'string') {
      return
    }

    patchValue(data, field, fieldValue.replace(linksRegex, (_match, group) => group.trim()))
  },
}

export { stripLinks as default }
