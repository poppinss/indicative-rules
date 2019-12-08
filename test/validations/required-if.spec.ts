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

test.group('Validations | requiredIf', () => {
  test('throw exception when conditional field is not defined', (assert) => {
    const args = []
    const fn = (): any => validations.requiredIf.compile!(args)
    assert.throw(fn, 'requiredIf:make sure to define target field')
  })

  test('return args as it is when validates successfully', (assert) => {
    const args = ['password']
    assert.deepEqual(validations.requiredIf.compile!(args), args)
  })

  test('skip validation when conditional field does not exists', (assert) => {
    const data = {}
    const root = { original: data, tip: data, pointer: '' }
    const field = 'password_confirm'

    const args = ['password']
    const result = validations.requiredIf.validate(root, field, args, config)
    assert.isTrue(result)
  })

  test('return false when conditional field exists and field under validation is missing', (assert) => {
    const data = { password: 'foobar' }
    const root = { original: data, tip: data, pointer: '' }
    const field = 'password_confirm'

    const args = ['password']
    assert.isFalse(validations.requiredIf.validate(root, field, args, config))
  })

  test('skip validation when conditional field is null', (assert) => {
    const data = { password: null }
    const root = { original: data, tip: data, pointer: '' }
    const field = 'password_confirm'

    const args = ['password']
    const result = validations.requiredIf.validate(root, field, args, config)
    assert.isTrue(result)
  })

  test('work fine when field under validation is available', (assert) => {
    const data = { password: 'foobar', 'password_confirm': 'foobar' }
    const root = { original: data, tip: data, pointer: '' }
    const field = 'password_confirm'

    const args = ['password']
    const result = validations.requiredIf.validate(root, field, args, config)
    assert.isTrue(result)
  })
})
