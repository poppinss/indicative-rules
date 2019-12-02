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

test.group('Validations | confirmed', () => {
  test('work fine when the confirmed field is equal', async (assert) => {
    const data = { password: '1234', password_confirmation: '1234' }
    const root = { original: data, tip: data, pointer: '' }
    const field = 'password'

    const args: any[] = []
    const result = validations.confirmed.validate(root, field, args, config)
    assert.isTrue(result)
  })

  test('return false when then confirmed field isn\'t equal', async (assert) => {
    const data = { password: '1234', password_confirmation: '12345' }
    const root = { original: data, tip: data, pointer: '' }
    const field = 'password'

    const args: any[] = []
    assert.isFalse(validations.confirmed.validate(root, field, args, config))
  })

  test('return false confirmed value is undefined', async (assert) => {
    const data = { password: '1234', password_confirmation: undefined }
    const root = { original: data, tip: data, pointer: '' }
    const field = 'password'

    const args: any[] = []
    assert.isFalse(validations.confirmed.validate(root, field, args, config))
  })

  test('return true when data types are different', async (assert) => {
    const data = {
      password: '1234',
      password_confirmation: 1234,
      new_password: 1234,
      new_password_confirmation: '1234',
    }
    const root = { original: data, tip: data, pointer: '' }

    const args: any[] = []
    assert.isTrue(validations.confirmed.validate(root, 'password', args, config))
    assert.isTrue(validations.confirmed.validate(root, 'new_password', args, config))
  })
})
