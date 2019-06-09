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
 * Returns a boolean telling if value is an object or not. `null` and `Arrays`
 * returns false.
 *
 * @example
 * ```js
 * const { is } = require('indicative')
 *
 * is.isObject({}) // true
 * is.isObject(null) // false
 * is.isObject([]) // false
 * ```
 */
export const isObject = (input: any): boolean => input instanceof Object && !Array.isArray(input)
