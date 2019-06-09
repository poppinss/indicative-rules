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
 * Returns a boolean telling if value is existy or not.
 * Empty string, `null` and `undefined` are not
 * existy.
 *
 * ```js
 * const { is } = require('indicative')
 *
 * is.existy('') // false
 * is.existy(null) // false
 * is.existy(true) // true
 * is.existy(false) // true
 * ```
 */
export const existy = (input: any): boolean => {
  if (typeof (input) === 'string') {
    return input.trim().length > 0
  }

  return (input !== null && input !== undefined)
}
