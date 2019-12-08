/*
* indicative-rules
*
* (c) Harminder Virk <virk@adonisjs.com>
*
* For the full copyright and license information, please view the LICENSE
* file that was distributed with this source code.
*/

import { addMonths, addDays, addMilliseconds } from 'date-fns'
import { DateOffsetKeys } from '../src/Contracts'

/**
 * Month related functions
 */
const months = {
  years: (unit: number): number => unit * 12,
  quarters: (unit: number): number => unit * 3,
  months: (unit: number): number => unit,
}

/**
 * Days related functions
 */
const days = {
  weeks: (unit: number): number => unit * 7,
  days: (unit: number): number => unit,
}

/**
 * Milliseconds related functions
 */
const milliseconds = {
  hours: (unit: number): number => unit * 3600000,
  minutes: (unit: number): number => unit * 60000,
  seconds: (unit: number): number => unit * 1000,
  milliseconds: (unit: number): number => unit,
}

/**
 * The job of this method is to ensure that we pull less dependencies from
 * date-fns.
 */
export const calcUnits = (diffUnit: number, key: DateOffsetKeys, operator: string): Date => {
  if (months[key]) {
    return addMonths(new Date(), operator === '-' ? -months[key](diffUnit) : months[key](diffUnit))
  }

  if (days[key]) {
    return addDays(new Date(), operator === '-' ? -days[key](diffUnit) : days[key](diffUnit))
  }

  if (milliseconds[key]) {
    return addMilliseconds(
      new Date(),
      operator === '-' ? -milliseconds[key](diffUnit) : milliseconds[key](diffUnit),
    )
  }

  throw new Error(`Invalid time calculation key ${key}`)
}

/**
 * An array of keys allowed for comparing date offset
 */
export const dateOffsetKeys: DateOffsetKeys[] = [
  'years',
  'quarters',
  'months',
  'weeks',
  'days',
  'hours',
  'minutes',
  'seconds',
  'milliseconds',
]
