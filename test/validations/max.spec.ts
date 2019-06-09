'use strict'

/*
* indicative
*
* (c) Harminder Virk <virk@adonisjs.com>
*
* For the full copyright and license information, please view the LICENSE
* file that was distributed with this source code.
*/

import * as test from 'japa'
import * as validations from '../../src/validations'
import { RulesConfig } from '../../src/Contracts'

const config: RulesConfig = {
  existyStrict: true,
}

test.group('Validations | max', () => {
  test('throw exception at compile time when max value is missing', async (assert) => {
    const args = []
    const fn = () => validations.max.compile!(args)
    assert.throw(fn, 'max: make sure to define max length')
  })

  test('throw exception at compile time when max value is not castable to number', async (assert) => {
    const args = ['foo']
    const fn = () => validations.max.compile!(args)
    assert.throw(fn, 'max: length must be defined as an integer')
  })

  test('throw exception at compile time when max value is null', async (assert) => {
    const args = [null]
    const fn = () => validations.max.compile!(args)
    assert.throw(fn, 'max: length must be defined as an integer')
  })

  test('cast max value to number when is defined in args', async (assert) => {
    const args = ['6']
    assert.deepEqual(validations.max.compile!(args), [6])
  })

  test('return false when length of field is greater than defined length', async (assert) => {
    const data = { password: 'foobarbaz' }
    const root = { original: data, tip: data, pointer: '' }
    const field = 'password'
    const args = [6]

    assert.isFalse(validations.max.validate(root, field, args, config))
  })

  test('return false when value is not a string or array', async (assert) => {
    const data = {
      password: 1990909990,
      created_at: new Date(),
      options: {},
      is_admin: true,
    }
    const root = { original: data, tip: data, pointer: '' }
    const args = [6]

    assert.isFalse(validations.max.validate(root, 'password', args, config))
    assert.isFalse(validations.max.validate(root, 'created_at', args, config))
    assert.isFalse(validations.max.validate(root, 'options', args, config))
    assert.isFalse(validations.max.validate(root, 'is_admin', args, config))
  })

  test('work fine when length of value of field is less than defined length', async (assert) => {
    const data = { password: 'foo' }
    const root = { original: data, tip: data, pointer: '' }
    const field = 'password'
    const args = [6]

    const result = validations.max.validate(root, field, args, config)
    assert.isTrue(result)
  })

  test('work fine when length of value of field is equal to the defined length', async (assert) => {
    const data = { password: 'foobar' }
    const root = { original: data, tip: data, pointer: '' }
    const field = 'password'
    const args = [6]

    const result = validations.max.validate(root, field, args, config)
    assert.isTrue(result)
  })

  test('return false when array length exceeds the max number', async (assert) => {
    const data = { users: ['virk', 'nikk', 'joe'] }
    const root = { original: data, tip: data, pointer: '' }
    const field = 'users'

    const args = [2]
    assert.isFalse(validations.max.validate(root, field, args, config))
  })

  test('work fine when array length is within the max number', async (assert) => {
    const data = { users: ['virk', 'nikk'] }
    const root = { original: data, tip: data, pointer: '' }
    const field = 'users'

    const args = [2]
    const result = validations.max.validate(root, field, args, config)
    assert.isTrue(result)
  })
})
