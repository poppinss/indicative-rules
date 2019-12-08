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
import { addMonths } from 'date-fns'
import * as validations from '../../src/validations'
import { RulesConfig } from '../../src/Contracts'

const config: RulesConfig = {
  existyStrict: true,
}

test.group('Validations | afterOffsetOf', () => {
  test('throw exception when offset arguments are missing', (assert) => {
    const args: any[] = []
    const fn = (): any => validations.afterOffsetOf.compile!(args)
    assert.throw(fn, 'afterOffsetOf:make sure to define offset unit and key')
  })

  test('throw exception when offset unit is missing', (assert) => {
    const args: any[] = [10]
    const fn = (): any => validations.afterOffsetOf.compile!(args)
    assert.throw(fn, 'afterOffsetOf:make sure to define offset unit and key')
  })

  test('throw exception when offset unit is not a valid key', (assert) => {
    const args: any[] = [12, 'foo']
    const fn = (): any => validations.afterOffsetOf.compile!(args)
    assert.throw(fn, 'afterOffsetOf:2nd argument must be a valid calc key')
  })

  test('return args when they are defined', (assert) => {
    const args: any[] = ['20', 'days']
    assert.deepEqual(validations.afterOffsetOf.compile!(args), [20, 'days'])
  })

  test('return false when date is not after defined offset', (assert) => {
    const data = { renewal: new Date() }
    const root = { original: data, tip: data, pointer: '' }
    const field = 'renewal'
    const args = ['12', 'months']

    assert.isFalse(validations.afterOffsetOf.validate(root, field, args, config))
  })

  test('return false when value is not castable', (assert) => {
    const data = {
      field1: {},
      field2: [],
      field3: 10,
      field4: true,
      field5: 'hello',
    }

    const root = { original: data, tip: data, pointer: '' }
    const args = ['12', 'months']

    assert.isFalse(validations.afterOffsetOf.validate(root, 'field1', args, config))
    assert.isFalse(validations.afterOffsetOf.validate(root, 'field2', args, config))
    assert.isFalse(validations.afterOffsetOf.validate(root, 'field3', args, config))
    assert.isFalse(validations.afterOffsetOf.validate(root, 'field4', args, config))
    assert.isFalse(validations.afterOffsetOf.validate(root, 'field5', args, config))
  })

  test('work fine when value is after defined offset', (assert) => {
    const data = { renewal: addMonths(new Date(), 13) }
    const root = { original: data, tip: data, pointer: '' }
    const field = 'renewal'

    const args = ['12', 'months']
    const result = validations.afterOffsetOf.validate(root, field, args, config)
    assert.isTrue(result)
  })
})
