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

test.group('Validations | size', () => {
  test('throw exception at compile time when size value is missing', (assert) => {
    const args = []
    const fn = (): any => validations.size.compile!(args)
    assert.throw(fn, 'size: make sure to define length value')
  })

  test('throw exception at compile time when size value is not castable to number', (assert) => {
    const args = ['foo']
    const fn = (): any => validations.size.compile!(args)
    assert.throw(fn, 'size: length must be defined as an integer')
  })

  test('throw exception at compile time when size value is null', (assert) => {
    const args = [null]
    const fn = (): any => validations.size.compile!(args)
    assert.throw(fn, 'size: length must be defined as an integer')
  })

  test('cast size value to number when is defined in args', (assert) => {
    const args = ['6']
    assert.deepEqual(validations.size.compile!(args), [6])
  })

  test('return false when length of field is greater than defined length', (assert) => {
    const data = { password: 'foobarbaz' }
    const root = { original: data, tip: data, pointer: '' }
    const field = 'password'
    const args = [6]

    assert.isFalse(validations.size.validate(root, field, args, config))
  })

  test('return false when length of field is less than defined length', (assert) => {
    const data = { password: 'foo' }
    const root = { original: data, tip: data, pointer: '' }
    const field = 'password'
    const args = [6]

    assert.isFalse(validations.size.validate(root, field, args, config))
  })

  test('return false when value is not a string or array', (assert) => {
    const data = {
      password: 1990909990,
      created_at: new Date(),
      options: {},
      is_admin: true,
    }
    const root = { original: data, tip: data, pointer: '' }
    const args = [6]

    assert.isFalse(validations.size.validate(root, 'password', args, config))
    assert.isFalse(validations.size.validate(root, 'created_at', args, config))
    assert.isFalse(validations.size.validate(root, 'options', args, config))
    assert.isFalse(validations.size.validate(root, 'is_admin', args, config))
  })

  test('work fine when length of value of field is same as the defined length', (assert) => {
    const data = { password: 'foobar' }
    const root = { original: data, tip: data, pointer: '' }
    const field = 'password'
    const args = [6]

    const result = validations.size.validate(root, field, args, config)
    assert.isTrue(result)
  })

  test('return false when array length exceeds the size number', (assert) => {
    const data = { users: ['virk', 'nikk', 'joe'] }
    const root = { original: data, tip: data, pointer: '' }
    const field = 'users'

    const args = [2]
    assert.isFalse(validations.size.validate(root, field, args, config))
  })

  test('return false when array length is less than the size', (assert) => {
    const data = { users: ['virk'] }
    const root = { original: data, tip: data, pointer: '' }
    const field = 'users'

    const args = [2]
    assert.isFalse(validations.size.validate(root, field, args, config))
  })

  test('work fine when array length is same as the defined size', (assert) => {
    const data = { users: ['virk', 'nikk'] }
    const root = { original: data, tip: data, pointer: '' }
    const field = 'users'

    const args = [2]
    const result = validations.size.validate(root, field, args, config)
    assert.isTrue(result)
  })

  test('ignore null value is non strict mode', (assert) => {
    const data = { users: null }
    const root = { original: data, tip: data, pointer: '' }
    const field = 'users'

    const args = [2]
    const result = validations.size.validate(root, field, args, { existyStrict: false })
    assert.isTrue(result)
  })

  test('return false for null value in strict mode', (assert) => {
    const data = { users: null }
    const root = { original: data, tip: data, pointer: '' }
    const field = 'users'

    const args = [2]
    const result = validations.size.validate(root, field, args, config)
    assert.isFalse(result)
  })
})
