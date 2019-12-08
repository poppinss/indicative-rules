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

test.group('Validations | after', () => {
  test('throw exception when after value is not defined', (assert) => {
    const args: any[] = []
    const fn = (): any => validations.after.compile!(args)
    assert.throw(fn, 'after:make sure to define the after date')
  })

  test('throw exception when after value is defined as null', (assert) => {
    const args: any[] = [null]
    const fn = (): any => validations.after.compile!(args)
    assert.throw(fn, 'after:after date must be defined as string or date object')
  })

  test('return args as date when is a valid date', (assert) => {
    const args: any[] = ['2010-11-20']
    assert.deepEqual(validations.after.compile!(args), [new Date('2010-11-20')])
  })

  test('return false when date is not after defined date', (assert) => {
    const data = { dob: '1980-11-20' }
    const field = 'dob'
    const root = { original: data, tip: data, pointer: '' }

    const args = ['2010-11-20']
    assert.isFalse(validations.after.validate(root, field, args, config))
  })

  test('work fine when value is after defined date', (assert) => {
    const data = { dob: '2011-01-01' }
    const field = 'dob'
    const root = { original: data, tip: data, pointer: '' }

    const args = ['2010-11-20']
    const result = validations.after.validate(root, field, args, config)
    assert.isTrue(result)
  })

  test('return false when value is not castable', (assert) => {
    const data = {
      field1: {},
      field2: [],
      field3: 'hello',
      field4: 10,
      field5: true,
    }
    const root = { original: data, tip: data, pointer: '' }

    const args = ['2010-11-20']

    assert.isFalse(validations.after.validate(root, 'field1', args, config))
    assert.isFalse(validations.after.validate(root, 'field2', args, config))
    assert.isFalse(validations.after.validate(root, 'field3', args, config))
    assert.isFalse(validations.after.validate(root, 'field4', args, config))
    assert.isFalse(validations.after.validate(root, 'field5', args, config))
  })
})
