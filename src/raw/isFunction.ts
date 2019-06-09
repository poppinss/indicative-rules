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
 * Returns a boolean telling if value is a function or not.
 *
 * @example
 * ```js
 * const { is } = require('indicative')
 *
 * function foo () {}
 *
 * if (is.isFunction(foo)) {
 * }
 * ```
 */
export const isFunction = (input: any) => typeof (input) === 'function'
