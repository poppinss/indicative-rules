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

const ipv6Regex = /^(?:(?:[0-9a-fA-F:]){1,4}(?:(?::(?:[0-9a-fA-F]){1,4}|:)){2,7})+$/

/**
 * Returns a boolean telling if value is an ipv6 address or not.
 *
 * @example
 * ```js
 * const { is } = require('indicative')
 *
 * if (is.ipv6('127.0.0.1')) {
 * }
 * ```
 */
export const ipv6 = (input: string): boolean => ipv6Regex.test(input)
