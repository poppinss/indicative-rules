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

test.group('Validations | before', () => {
  test('throw exception when before value is missing', (assert) => {
    const args: any[] = []
    const fn = (): any => validations.before.compile!(args)
    assert.throw(fn, 'before:make sure to define the before date')
  })

  test('throw exception when after value is defined as null', (assert) => {
    const args: any[] = [null]
    const fn = (): any => validations.after.compile!(args)
    assert.throw(fn, 'after:after date must be defined as string or date object')
  })

  test('return args when before value is defined', (assert) => {
    const args: any[] = ['2010-11-20']
    assert.deepEqual(validations.before.compile!(args), [new Date('2010-11-20')])
  })

  test('return false when date is not before defined date', (assert) => {
    const data = { dob: '2012-11-20' }
    const root = { original: data, tip: data, pointer: '' }
    const field = 'dob'

    const args = ['2010-11-20']
    assert.isFalse(validations.before.validate(root, field, args, config))
  })

  test('work fine when value is before defined date', (assert) => {
    const data = { dob: '2010-01-01' }
    const root = { original: data, tip: data, pointer: '' }
    const field = 'dob'

    const args = ['2010-11-20']
    const result = validations.before.validate(root, field, args, config)
    assert.isTrue(result)
  })

  test('return false when value is not castable', (assert) => {
    const data = {
      field1: {},
      field2: [],
      field3: 'hello',
    }
    const root = { original: data, tip: data, pointer: '' }

    const args = ['2010-11-20']

    assert.isFalse(validations.before.validate(root, 'field1', args, config))
    assert.isFalse(validations.before.validate(root, 'field2', args, config))
    assert.isFalse(validations.before.validate(root, 'field3', args, config))
  })
})
