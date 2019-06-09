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
 * Exports [isYesterday](https://date-fns.org/v1.30.1/docs/isYesterday) function from `date-fns`. So
 * make sure to check their docs.
 *
 * @example
 * ```js
 * const { is } = require('indicative')
 *
 * const date = new Date()
 * date.setDate(date.getDate() - 1)
 *
 * if (is.yesterday(date)) {
 * }
 * ```
 */
export { isYesterday as yesterday } from 'date-fns'
