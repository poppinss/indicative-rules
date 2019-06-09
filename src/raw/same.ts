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
 * Compare two values to be exactly same
 *
 * @example
 * ```js
 * const { is } = require('indicative')
 *
 * is.same('foo', 'foo')
 * ```
 */
export const same = (input: any, comparsionInput: any) => input === comparsionInput
