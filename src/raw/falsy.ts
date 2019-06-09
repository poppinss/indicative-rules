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

import { truthy } from './truthy'

/**
 * Returns a boolean telling if value is falsy or not. Following
 * values returns `true`.
 *
 * - false
 * - 0
 * - null
 * - undefined
 * - empty string
 *
 * ```js
 * const { is } = require('indicative')
 *
 * is.falsy('') // true
 * is.falsy(null) // true
 * is.falsy(false) // true
 * is.falsy(0) // true
 * is.falsy(true) // false
 * ```
 */
export const falsy = (input: any): boolean => !truthy(input)
