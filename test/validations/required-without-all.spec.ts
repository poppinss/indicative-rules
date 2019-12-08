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

test.group('Validations | requiredWithoutAll', () => {
  test('throw exception when conditional field is not defined', (assert) => {
    const args = []
    const fn = (): any => validations.requiredWithoutAll.compile!(args)
    assert.throw(fn, 'requiredWithoutAll:make sure to define one or more target fields')
  })

  test('return args as it is when validates successfully', (assert) => {
    const args = ['username', 'email']
    assert.deepEqual(validations.requiredWithoutAll.compile!(args), args)
  })

  test('work fine when all the targeted fields are present', (assert) => {
    const data = { username: 'foo', email: 'foo@bar.com' }
    const root = { original: data, tip: data, pointer: '' }
    const field = 'password'

    const args = ['username', 'email']
    const result = validations.requiredWithoutAll.validate(root, field, args, config)
    assert.isTrue(result)
  })

  test('return false when all the targeted fields are missing and actual field is missing', (assert) => {
    const data = {}
    const root = { original: data, tip: data, pointer: '' }
    const field = 'password'

    const args = ['username', 'email']
    assert.isFalse(validations.requiredWithoutAll.validate(root, field, args, config))
  })

  test('return false when all the targeted fields are missing and actual field is null', (assert) => {
    const data = { password: null }
    const root = { original: data, tip: data, pointer: '' }
    const field = 'password'

    const args = ['username', 'email']
    assert.isFalse(validations.requiredWithoutAll.validate(root, field, args, config))
  })

  test('work fine when all the targeted fields are missing and actual field is valid', (assert) => {
    const data = { password: 'foobar' }
    const root = { original: data, tip: data, pointer: '' }
    const field = 'password'

    const args = ['username', 'email']
    const result = validations.requiredWithoutAll.validate(root, field, args, config)
    assert.isTrue(result)
  })

  test('work fine when targeted fields and actual field are not present', (assert) => {
    const data = { username: 'foo' }
    const root = { original: data, tip: data, pointer: '' }
    const field = 'password'

    const args = ['username', 'email']
    const result = validations.requiredWithoutAll.validate(root, field, args, config)
    assert.isTrue(result)
  })
})
