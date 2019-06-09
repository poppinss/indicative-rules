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
import * as normalize from 'validator/lib/normalizeEmail'
import { SanitizationRulesContract } from '../Contracts'

type EmailArg = Parameters<SanitizationRulesContract['normalizeEmail']>[0]

/**
 * Normalizes the email address by removing unwanted characters from it. For example
 * `foo+bar@gmail.com` will become `foobar@gmail.com` and also it will normalize
 * the characters case too.
 *
 * If value is not a string, it will be returned as it is, otherwise it is passed to
 * [validator.js](https://github.com/chriso/validator.js) normalizeEmail method.
 *
 * ```js
 * const sanitizationRules = {
 *   email: [
 *     rule('normalize_email')
 *   ]
 * }
 *
 * // pass options
 * const sanitizationRules = {
 *   email: [
 *     rule('normalize_email', {
 *       all_lowercase: true,
 *       icloud_remove_subaddress: true
 *     })
 *   ]
 * }
 * ```
 */
const normalizeEmail: SanitizationDefination = {
  sanitize (data, field, args: EmailArg | any[] = []) {
    let fieldValue = getValue(data, field)
    if (typeof (fieldValue) !== 'string') {
      return
    }

    patchValue(data, field, normalize(fieldValue, args[0]))
  },
}

export { normalizeEmail as default }
