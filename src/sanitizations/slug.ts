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
import * as slugify from '@slynova/slug'

/**
 * Converts a string to a URL friendly slug. If value is not a string, it will be
 * returned as it is.
 *
 * Also it will handle ascii charmaps and converts them to their utf-8 counter parts.
 *
 * ```text
 * I am > than you
 * ```
 *
 * will become
 *
 * ```text
 * i-am-greater-than-you
 * ```
 *
 * ```ts
 * import { sanitizations } from 'indicative/sanitizer'
 *
 * const sanitizationRules = {
 *   slug: 'slug'
 * }
 *
 * // or
 * const sanitizationRules = {
 *   slug: [
 *     sanitizations.slug()
 *   ]
 * }
 * ```
 */
const slug: SanitizationDefination = {
  sanitize (data, field) {
    let fieldValue = getValue(data, field)
    if (typeof (fieldValue) !== 'string') {
      return
    }

    patchValue(data, field, slugify(fieldValue))
  },
}

export { slug as default }
