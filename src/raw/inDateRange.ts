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
 * Exports [isWithinRange](https://date-fns.org/v1.30.1/docs/isWithinRange) function from `date-fns`. So
 * make sure to check their docs.
 *
 * @example
 * ```js
 * const { is } = require('indicative')
 *
 * if (is.inDateRange()) {
 * }
 * ```
 */
import * as inDateRange from 'date-fns/is_within_range';

export const inDateRange;
