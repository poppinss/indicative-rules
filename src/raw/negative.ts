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

import { positive } from './positive'

/**
 * Returns a boolean telling if value is a negative number or not
 *
 * @example
 * ```js
 * const { is } = require('indicative')
 *
 * is.negative(-3) // true
 * ```
 */
export const negative = (input: number): boolean => !positive(input)
