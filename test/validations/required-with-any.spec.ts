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

test.group('Validations | requiredWithAny', () => {
  test('throw exception when conditional field is not defined', async (assert) => {
    const args = []
    const fn = () => validations.requiredWithAny.compile!(args)
    assert.throw(fn, 'requiredWithAny:make sure to define one or more target fields')
  })

  test('return args as it is when validates successfully', async (assert) => {
    const args = ['username', 'email']
    assert.deepEqual(validations.requiredWithAny.compile!(args), args)
  })

  test('work fine when none of the targeted fields are present', async (assert) => {
    const data = {}

    const root = { original: data, tip: data, pointer: '' }
    const field = 'password'

    const args = ['username', 'email']
    const result = validations.requiredWithAny.validate(root, field, args, config)
    assert.isTrue(result)
  })

  test('return false when targeted fields are present but actual field is missing', async (assert) => {
    const data = { username: 'foo' }
    const root = { original: data, tip: data, pointer: '' }
    const field = 'password'

    const args = ['username', 'email']
    assert.isFalse(validations.requiredWithAny.validate(root, field, args, config))
  })

  test('return false when targeted fields are present but actual field value is null', async (assert) => {
    const data = { username: 'foo', password: null }
    const root = { original: data, tip: data, pointer: '' }
    const field = 'password'
    const args = ['username', 'email']

    assert.isFalse(validations.requiredWithAny.validate(root, field, args, config))
  })

  test('work fine when targeted fields are present and actual field value is valid', async (assert) => {
    const data = { username: 'foo', password: 'bar' }
    const root = { original: data, tip: data, pointer: '' }
    const field = 'password'
    const args = ['username', 'email']

    const result = validations.requiredWithAny.validate(root, field, args, config)
    assert.isTrue(result)
  })
})
