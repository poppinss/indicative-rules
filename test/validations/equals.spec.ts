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

test.group('Validations | equals', () => {
  test('throw exception when comparison value is missing', async (assert) => {
    const args: any[] = []
    const fn = () => validations.equals.compile!(args)
    assert.throw(fn, 'equals:make sure to define the comparison string')
  })

  test('returns args as it is when valid', async (assert) => {
    const args = ['bar']
    assert.deepEqual(validations.equals.compile!(args), args)
  })

  test('return false when value of targeted field is not equal to defined value', async (assert) => {
    const data = { title: 'foo' }
    const root = { original: data, tip: data, pointer: '' }
    const field = 'title'

    const args = ['bar']
    assert.isFalse(validations.equals.validate(root, field, args, config))
  })

  test('work fine when value for field matches to defined value', async (assert) => {
    const data = { title: 'bar' }
    const root = { original: data, tip: data, pointer: '' }
    const field = 'title'

    const args = ['bar']
    const result = validations.equals.validate(root, field, args, config)
    assert.isTrue(result)
  })

  test('work fine when then under validation is a number', async (assert) => {
    const data = { age: 18 }
    const root = { original: data, tip: data, pointer: '' }
    const field = 'age'
    const args = ['18']

    const result = validations.equals.validate(root, field, args, config)
    assert.isTrue(result)
  })

  test('work fine when doing negative boolean operations', async (assert) => {
    const data = { accepted: false }
    const root = { original: data, tip: data, pointer: '' }
    const field = 'accepted'
    const args = [false]

    const result = validations.equals.validate(root, field, args, config)
    assert.isTrue(result)
  })

  test('work fine when doing numeric operation with 0', async (assert) => {
    const data = { accepted: 0 }
    const root = { original: data, tip: data, pointer: '' }
    const field = 'accepted'
    const args = [0]

    const result = validations.equals.validate(root, field, args, config)
    assert.isTrue(result)
  })
})
