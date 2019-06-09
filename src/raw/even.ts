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
 * Returns a boolean telling if value is even or not
 *
 * ```js
 * const { is } = require('indicative')
 *
 * is.even(2) // true
 * is.even(3) // false
 * ```
 */
export const even = (input: number): boolean => {
  return input % 2 === 0
}
