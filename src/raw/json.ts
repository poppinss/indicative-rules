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
 * Returns a boolean telling if value is a valid JSON string
 * or not.
 *
 * @example
 * ```js
 * const { is } = require('indicative')
 *
 * if (is.json("{ \"hello\": \"world\" }")) {
 * }
 * ```
 */
export const json = (input: any): boolean => {
  if (typeof (input) !== 'string') {
    return false
  }

  try {
    return !!JSON.parse(input)
  } catch (e) {
    return false
  }
}
