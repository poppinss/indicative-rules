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
 * Returns a boolean telling if value is a valid string or not.
 *
 * @example
 * ```js
 * const { is } = require('indicative')
 *
 * if (is.isString('hello world')) {
 * }
 * ```
 */
export const isString = (input: any): boolean => typeof (input) === 'string'
