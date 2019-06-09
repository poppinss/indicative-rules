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
 * Compare two values to be exactly same type
 *
 * @example
 * ```js
 * const { is } = require('indicative')
 *
 * is.same('foo', 'bar') // true
 * is.same(10, 22) // true
 * ```
 */
export const sameType = (input: any, comparsionInput: any) => {
  return typeof (input) === typeof (comparsionInput)
}
