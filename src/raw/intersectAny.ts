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
 * Returns a boolean telling if any of the `input` array items are
 * from the `comparison` array or not.
 *
 * @example
 * ```js
 * const { is } = require('indicative')
 *
 * const input = ['foo', 'bar']
 * const compareWith = ['foo', 'baz']
 *
 * if (is.intersectAny(input, compareWith)) {
 * }
 * ```
 */
export const intersectAny = (input: any[], intersectionArray: any[]) => {
  if (!Array.isArray(input) || !Array.isArray(intersectionArray)) {
    return false
  }

  return input.filter((n) => intersectionArray.indexOf(n) > -1).length > 0
}
