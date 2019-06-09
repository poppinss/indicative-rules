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
 * Exports [isFuture](https://date-fns.org/v1.30.1/docs/isFuture) function from `date-fns`. So
 * make sure to check their docs.
 *
 * @example
 * ```js
 * const { is } = require('indicative')
 *
 * if (is.isFuture(new Date(2080, 6, 10))) {
 * }
 * ```
 */
export { isFuture as future } from 'date-fns'
