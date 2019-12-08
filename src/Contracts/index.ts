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

import validator from 'validator'
import { ParsedRule } from 'indicative-parser'

/**
 * Allowed keys for date offset
 */
export type DateOffsetKeys =
| 'years'
| 'quarters'
| 'months'
| 'weeks'
| 'days'
| 'hours'
| 'minutes'
| 'seconds'
| 'milliseconds'

export type RulesConfig = {
  existyStrict: boolean,
}

export interface ValidationRulesContract {
  above ([minValue]: [number]): ParsedRule,
  accepted (): ParsedRule,
  alpha (): ParsedRule,
  alphaNumeric (): ParsedRule,
  array (): ParsedRule,
  boolean (): ParsedRule,
  confirmed (): ParsedRule,
  different ([targetField]: [string]): ParsedRule,
  email (): ParsedRule,
  endsWith ([substring]: [string]): ParsedRule,
  equals ([comparisonValue]: [any]): ParsedRule,
  in (args: any[]): ParsedRule,
  includes ([substring]: [string]): ParsedRule,
  integer (): ParsedRule,
  float (): ParsedRule,
  ip (): ParsedRule,
  ipv4 (): ParsedRule,
  ipv6 (): ParsedRule,
  json (): ParsedRule,
  max ([maxLength]: [number]): ParsedRule,
  size ([size]: [number]): ParsedRule,
  min ([minLength]: [number]): ParsedRule,
  notEquals ([comparisonValue]: [any]): ParsedRule,
  notIn (args: any[]): ParsedRule,
  number (): ParsedRule,
  object (): ParsedRule,
  range ([min, max]: [number, number]): ParsedRule,
  regex ([pattern]: [RegExp]): ParsedRule,
  required (): ParsedRule,
  requiredIf ([targetField]: [string]): ParsedRule,
  requiredWhen ([targetField, expectedValue]: [string, any]): ParsedRule,
  requiredWithAll (args: string[]): ParsedRule,
  requiredWithAny (args: string[]): ParsedRule,
  requiredWithoutAll (args: string[]): ParsedRule,
  requiredWithoutAny (args: string[]): ParsedRule,
  same ([targetField]: [string]): ParsedRule,
  startsWith ([substring]: [string]): ParsedRule,
  string (): ParsedRule,
  subset (args: any[]): ParsedRule,
  under ([maxValue]: [number]): ParsedRule,
  url (): ParsedRule,
  after ([comparisonDate]: [Date | string | number]): ParsedRule,
  before ([comparisonDate]: [Date | string | number]): ParsedRule,
  date (): ParsedRule,
  dateFormat (args: string[]): ParsedRule,
  beforeOffsetOf ([diffUnit, key]: [number, DateOffsetKeys]): ParsedRule,
  afterOffsetOf ([diffUnit, key]: [number, DateOffsetKeys]): ParsedRule,
}

export interface SanitizationRulesContract {
  escape (): ParsedRule,
  lowerCase (args?: [string]): ParsedRule,
  normalizeEmail (options?: [validator.NormalizeEmailOptions]): ParsedRule,
  plural (): ParsedRule,
  singular (): ParsedRule,
  slug (): ParsedRule,
  stripLinks (): ParsedRule,
  stripTags (args?: any[]): ParsedRule,
  trim (): ParsedRule,
  upperCase (args?: [string]): ParsedRule,
}
