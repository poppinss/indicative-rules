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
 * Returns a boolean telling if value a valid number or not.
 * Also checks against `NaN`.
 *
 * @example
 * ```js
 * const { is } = require('indicative')
 *
 * if (is.isNumber(20)) {
 * }
 * ```
 */
export const isNumber = (input: any): boolean => {
  return typeof (input) === 'number' && !isNaN(input)
}
