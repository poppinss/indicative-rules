'use strict'

/*
* indicative
*
* (c) Harminder Virk <virk@adonisjs.com>
*
* For the full copyright and license information, please view the LICENSE
* file that was distributed with this source code.
*/

import test from 'japa'
import * as validations from '../../src/validations'
import { RulesConfig } from '../../src/Contracts'

const config: RulesConfig = {
  existyStrict: true,
}

test.group('Validations | dateFormat', () => {
  test('throw exception when date format is not defined', (assert) => {
    const args: any[] = []
    const fn = (): any => validations.dateFormat.compile!(args)
    assert.throw(fn, 'dateFormat:make sure to define atleast one date format')
  })

  test('return args when date format is defined', (assert) => {
    const args: any[] = ['YYYY/MM/DD']
    assert.deepEqual(validations.dateFormat.compile!(args), args)
  })

  test('return false when field value is not a valid date', (assert) => {
    const data = { dob: '10th' }
    const root = { original: data, tip: data, pointer: '' }
    const field = 'dob'

    const args = ['YYYY/MM/DD']
    assert.isFalse(validations.dateFormat.validate(root, field, args, config))
  })

  test('return false when value is a date but not with different format', (assert) => {
    const data = { dob: '10-20-2015' }
    const root = { original: data, tip: data, pointer: '' }
    const field = 'dob'

    const args = ['YYYY/MM/DD']
    assert.isFalse(validations.dateFormat.validate(root, field, args, config))
  })

  test('work fine when field value is a valid date according to given format', (assert) => {
    const data = { dob: '2015/10/20' }
    const root = { original: data, tip: data, pointer: '' }
    const field = 'dob'

    const args = ['YYYY/MM/DD']
    const result = validations.dateFormat.validate(root, field, args, config)
    assert.isTrue(result)
  })

  test('should match against multiple formats', (assert) => {
    const data = { dob: '2015/10/20' }
    const root = { original: data, tip: data, pointer: '' }
    const field = 'dob'

    const args = ['YYYY-MM-DD', 'YYYY/MM/DD']
    const result = validations.dateFormat.validate(root, field, args, config)
    assert.isTrue(result)
  })

  test('return false when time is missing from date', (assert) => {
    const data = { dob: '2015/10/20' }
    const root = { original: data, tip: data, pointer: '' }
    const field = 'dob'
    const args = ['YYYY/MM/DD hh:mm:ss']

    assert.isFalse(validations.dateFormat.validate(root, field, args, config))
  })

  test('return false when time format is different', (assert) => {
    const data = { dob: '2015/10/20 23:33:34' }
    const root = { original: data, tip: data, pointer: '' }
    const field = 'dob'
    const args = ['YYYY/MM/DD hh:mm:ss']

    assert.isFalse(validations.dateFormat.validate(root, field, args, config))
  })

  test('work fine when time is in correct format', (assert) => {
    const data = { dob: '2015/10/20 23:33:34' }
    const root = { original: data, tip: data, pointer: '' }
    const field = 'dob'
    const args = ['YYYY/MM/DD HH:mm:ss']

    const result = validations.dateFormat.validate(root, field, args, config)
    assert.isTrue(result)
  })

  test('ignore timezone when Z identifier is defined', (assert) => {
    const data = { dob: '2015-10-20T23:33:34+05:30' }
    const root = { original: data, tip: data, pointer: '' }
    const field = 'dob'
    const args = ['YYYY-MM-DDTHH:mm:ssZ']

    const result = validations.dateFormat.validate(root, field, args, config)
    assert.isTrue(result)
  })

  test('ignore timezone when ZZ identifier is defined', (assert) => {
    const data = { dob: '2015-10-20T23:33:34+0530' }
    const root = { original: data, tip: data, pointer: '' }
    const field = 'dob'
    const args = ['YYYY-MM-DDTHH:mm:ssZZ']

    const result = validations.dateFormat.validate(root, field, args, config)
    assert.isTrue(result)
  })

  test('fail when timezone is missing and Z identifier is used', (assert) => {
    const data = { dob: '2015-10-20T23:33:34' }
    const root = { original: data, tip: data, pointer: '' }
    const field = 'dob'
    const args = ['YYYY-MM-DDTHH:mm:ssZ']

    assert.isFalse(validations.dateFormat.validate(root, field, args, config))
  })

  test('fail when timezone is defined wrongly', (assert) => {
    const data = { dob: '2015-10-20T23:33:34+5030' }
    const root = { original: data, tip: data, pointer: '' }
    const field = 'dob'
    const args = ['YYYY-MM-DDTHH:mm:ssZ']

    assert.isFalse(validations.dateFormat.validate(root, field, args, config))
  })

  test('pass when Z identifier is used instead of offset', (assert) => {
    const data = { dob: '2015-10-20T23:33:34Z' }
    const root = { original: data, tip: data, pointer: '' }
    const field = 'dob'
    const args = ['YYYY-MM-DDTHH:mm:ssZ']

    const result = validations.dateFormat.validate(root, field, args, config)
    assert.isTrue(result)
  })

  test('fail when Z identifier is used but with wrong timezone identifier', (assert) => {
    const data = { dob: '2015-10-20T23:33:34Z' }
    const root = { original: data, tip: data, pointer: '' }
    const field = 'dob'
    const args = ['YYYY-MM-DDTHH:mm:ssZZ']

    assert.isFalse(validations.dateFormat.validate(root, field, args, config))
  })

  test('pass when milliseconds are expected with timezone offset', (assert) => {
    const data = { dob: '2015-10-20T23:33:34.231Z' }
    const root = { original: data, tip: data, pointer: '' }
    const field = 'dob'
    const args = ['YYYY-MM-DDTHH:mm:ss.SSSZ']

    const result = validations.dateFormat.validate(root, field, args, config)
    assert.isTrue(result)
  })

  test('fail when milliseconds are expected but they are incorrect', (assert) => {
    const data = { dob: '2015-10-20T23:33:34.1050Z' }
    const root = { original: data, tip: data, pointer: '' }
    const field = 'dob'
    const args = ['YYYY-MM-DDTHH:mm:ss.SSSZ']

    assert.isFalse(validations.dateFormat.validate(root, field, args, config))
  })
})
