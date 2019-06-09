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
 * Returns a boolean telling if an array is sorted in ascending
 * order.
 *
 * @example
 * ```js
 * const { is } = require('indicative')
 *
 * is.sorted([1, 2, 3, 4, 5, 6]) // true
 * is.sorted([1, 2, 4, 3, 5, 6]) // false
 * ```
 */
export const subset = (input: any[], superset: any[]) => {
  if (!Array.isArray(input) || !Array.isArray(superset)) {
    return false
  }

  return input.every(element => superset.includes(element))
}
