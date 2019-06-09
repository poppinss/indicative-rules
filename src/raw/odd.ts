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

import { even } from './even'

/**
 * Returns a boolean telling if number is an odd number or not.
 *
 * @example
 * ```js
 * const { is } = require('indicative')
 *
 * is.odd(3) // true
 * ```
 */
export const odd = (input: number): boolean => !even(input)
