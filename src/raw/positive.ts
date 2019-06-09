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
 * Returns a boolean telling if value is a positive number or not
 *
 * @example
 * ```js
 * const { is } = require('indicative')
 *
 * is.positive(3) // true
 * ```
 */
export const positive = (input: number): boolean => input >= 0
