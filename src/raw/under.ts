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
 * Tells if `input` is smaller than `comparsionInput`.
 *
 * @example
 * ```js
 * const { is } = require('indicative')
 *
 * if (is.under(20, 10)) {
 * }
 * ```
 */
export const under = (input: number, comparsionInput: number): boolean => {
  return input < comparsionInput
}
