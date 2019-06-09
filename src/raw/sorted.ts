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
export const sorted = (input: number[] | string[]) => {
  if (!Array.isArray(input)) {
    return false
  }

  let scaledDown = false
  let i = 0

  while (i < input.length) {
    const b = Number(input[i++])
    const a = Number(input[i - 2])

    if (a && a > b) {
      scaledDown = true
      break
    }
  }

  return !scaledDown
}
