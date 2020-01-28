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

/* eslint max-len: "off" */
const urlRegex = /https?:\/\/(www\.)?([-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}|localhost|(\d{1,3}.){3}.(\d{1,3}))\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/i

/**
 * Tells whether given input is a valid url or not
 *
 * @example
 * ```
 *   // Following yields to true
 *   http://foo.com
 *   https://foo.com
 *   http://localhost
 *   http://foo.co.in
 *   http://192.168.1.1:8080
 * ```
 */
export const url = (input: string): boolean => urlRegex.test(input)
