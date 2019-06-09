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
 * Exports [isPast](https://date-fns.org/v1.30.1/docs/isPast) function from `date-fns`. So
 * make sure to check their docs.
 *
 * @example
 * ```js
 * const { is } = require('indicative')
 *
 * if (is.past(new Date(1990, 6, 10))) {
 * }
 * ```
 */
export { isPast as past } from 'date-fns'
