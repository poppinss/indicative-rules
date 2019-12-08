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

/**
 * Test input against a custom regex.
 *
 * @example
 * ```js
 * const { is } = require('indicative')
 *
 * is.matches(/[a-z]/) // true
 * ```
 */
export const matches = (input: string, regex: RegExp): boolean => regex.test(input)
