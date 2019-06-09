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
 * Exports [isTomorrow](https://date-fns.org/v1.30.1/docs/isTomorrow) function from `date-fns`. So
 * make sure to check their docs.
 *
 * @example
 * ```js
 * const { is } = require('indicative')
 *
 * const date = new Date()
 * date.setDate(date.getDate() + 1)
 *
 * if (is.tomorrow(date)) {
 * }
 * ```
 */
export { isTomorrow as tomorrow } from 'date-fns'
