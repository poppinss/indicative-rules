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

test.group('Validations | object', () => {
  test('return false when value is not a valid object', async (assert) => {
    const data = { profile: 'foo' }
    const root = { original: data, tip: data, pointer: '' }
    const field = 'profile'

    const args: any[] = []
    assert.isFalse(validations.object.validate(root, field, args, config))
  })

  test('work fine when value is a valid object', async (assert) => {
    const data = { profile: { username: 'foo'} }
    const root = { original: data, tip: data, pointer: '' }
    const field = 'profile'

    const args: any[] = []
    const result = validations.object.validate(root, field, args, config)
    assert.isTrue(result)
  })

  test('return false when value of field is an array', async (assert) => {
    const data = { profile: ['username'] }
    const root = { original: data, tip: data, pointer: '' }
    const field = 'profile'
    const args: any[] = []

    assert.isFalse(validations.object.validate(root, field, args, config))
  })
})
