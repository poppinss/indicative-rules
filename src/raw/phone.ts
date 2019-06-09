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

const phoneRegex = /\b\d{3}[-.]?\d{3}[-.]?\d{4}\b/

/**
 * Validates an input string against the phone number regex. Checkout
 * [libphonenumber](https://www.npmjs.com/package/libphonenumber-js)
 * If looking for a battle tested phone number validation with
 * country codes.
 *
 * @example
 * ```js
 * const { is } = require('indicative')
 *
 * is.phone('9999999999')    // true
 * is.phone('999-999-9999')  // true
 * is.phone('999.999.9999')  // true
 * ```
 */
export const phone = (input: string): boolean => phoneRegex.test(input)
