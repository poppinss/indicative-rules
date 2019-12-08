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
 * Returns a boolean telling if value is in array or not.
 *
 * @example
 * ```js
 * const { is } = require('indicative')
 *
 * if (is.inArray('virk', ['virk', 'nikk'])) {
 * }
 * ```
 */
export const inArray = (input: any, dict: any[]): boolean => {
  if (!Array.isArray(dict)) {
    return false
  }

  return dict.indexOf(input) > -1
}
