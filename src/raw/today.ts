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
 * Exports [isToday](https://date-fns.org/v1.30.1/docs/isToday) function from `date-fns`. So
 * make sure to check their docs.
 *
 * @example
 * ```js
 * const { is } = require('indicative')
 *
 * if (is.today(new Date())) {
 * }
 * ```
 */
export { isToday as today } from 'date-fns'
