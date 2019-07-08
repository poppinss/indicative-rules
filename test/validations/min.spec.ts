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

test.group('Validations | min', () => {
  test('throw exception at compile time when min value is missing', async (assert) => {
    const args = []
    const fn = () => validations.min.compile!(args)
    assert.throw(fn, 'min: make sure to define min length')
  })

  test('throw exception at compile time when min value is not castable to number', async (assert) => {
    const args = ['foo']
    const fn = () => validations.min.compile!(args)
    assert.throw(fn, 'min: length must be defined as an integer')
  })

  test('throw exception at compile time when min value is null', async (assert) => {
    const args = [null]
    const fn = () => validations.min.compile!(args)
    assert.throw(fn, 'min: length must be defined as an integer')
  })

  test('cast min value to number when is defined in args', async (assert) => {
    const args = ['6']
    assert.deepEqual(validations.min.compile!(args), [6])
  })

  test('return false when length of field is less than defined length', async (assert) => {
    const data = { password: 'foo' }
    const root = { original: data, tip: data, pointer: '' }
    const field = 'password'
    const args = [6]

    assert.isFalse(validations.min.validate(root, field, args, config))
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

    assert.isFalse(validations.min.validate(root, 'password', args, config))
    assert.isFalse(validations.min.validate(root, 'created_at', args, config))
    assert.isFalse(validations.min.validate(root, 'options', args, config))
    assert.isFalse(validations.min.validate(root, 'is_admin', args, config))
  })

  test('work fine when length of value of field is greater than defined length', async (assert) => {
    const data = { password: 'foobarbaz' }
    const root = { original: data, tip: data, pointer: '' }
    const field = 'password'
    const args = [6]

    const result = validations.min.validate(root, field, args, config)
    assert.isTrue(result)
  })

  test('work fine when length of value of field is equal to the defined length', async (assert) => {
    const data = { password: 'foobar' }
    const root = { original: data, tip: data, pointer: '' }
    const field = 'password'
    const args = [6]

    const result = validations.min.validate(root, field, args, config)
    assert.isTrue(result)
  })

  test('return false when array length less than the min number', async (assert) => {
    const data = { users: ['virk'] }
    const root = { original: data, tip: data, pointer: '' }
    const field = 'users'

    const args = [2]
    assert.isFalse(validations.min.validate(root, field, args, config))
  })

  test('work fine when array length is within the min number', async (assert) => {
    const data = { users: ['virk', 'nikk'] }
    const root = { original: data, tip: data, pointer: '' }
    const field = 'users'

    const args = [2]
    const result = validations.min.validate(root, field, args, config)
    assert.isTrue(result)
  })

  test('ignore null value is non strict mode', async (assert) => {
    const data = { users: null }
    const root = { original: data, tip: data, pointer: '' }
    const field = 'users'

    const args = [2]
    const result = validations.min.validate(root, field, args, { existyStrict: false })
    assert.isTrue(result)
  })

  test('return false for null value in strict mode', async (assert) => {
    const data = { users: null }
    const root = { original: data, tip: data, pointer: '' }
    const field = 'users'

    const args = [2]
    const result = validations.min.validate(root, field, args, config)
    assert.isFalse(result)
  })
})
