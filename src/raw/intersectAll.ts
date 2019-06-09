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
 * Returns a boolean telling if all of the `input` array items are
 * from the `comparison` array or not.
 *
 * @example
 * ```js
 * const { is } = require('indicative')
 *
 * const input = ['foo', 'bar']
 * const compareWith = ['foo', 'bar', 'baz']
 *
 * if (is.intersectAll(input, compareWith)) {
 * }
 * ```
 */
export const intersectAll = (input: any[], intersectionArray: any[]): boolean => {
  if (!Array.isArray(input) || !Array.isArray(intersectionArray)) {
    return false
  }

  return input.filter((n) => intersectionArray.indexOf(n) > -1).length === input.length
}
