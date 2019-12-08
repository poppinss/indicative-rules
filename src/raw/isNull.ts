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
 * Returns a boolean telling if value is null or not.
 *
 * @example
 * ```js
 * const { is } = require('indicative')
 *
 * if (is.isNull(null)) {
 * }
 * ```
 */
export const isNull = (input: any): boolean => input === null
