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

import { ipv4 } from './ipv4'
import { ipv6 } from './ipv6'

/**
 * Returns a boolean telling if value is an ip address or not.
 *
 * @example
 * ```js
 * const { is } = require('indicative')
 *
 * if (is.ip('127.0.0.1')) {
 * }
 * ```
 */
export const ip = (input: string): boolean => ipv4(input) || ipv6(input)
