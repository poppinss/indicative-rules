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

/* eslint max-len: "off" */
const ipv4Regex = /^(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])(?:\.(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])){3}$/

/**
 * Returns a boolean telling if value is an ipv4 address or not.
 *
 * @example
 * ```js
 * const { is } = require('indicative')
 *
 * if (is.ipv4('127.0.0.1')) {
 * }
 * ```
 */
export const ipv4 = (input: string): boolean => ipv4Regex.test(input)
