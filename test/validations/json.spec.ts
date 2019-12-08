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

test.group('Validations | json', () => {
  test('return false when value is not a valid json string', (assert) => {
    const data = { profile: 'foo' }
    const root = { original: data, tip: data, pointer: '' }
    const field = 'profile'

    const args: any[] = []
    assert.isFalse(validations.json.validate(root, field, args, config))
  })

  test('work fine when value is a valid json string', (assert) => {
    const data = { profile: JSON.stringify({name: 'foo'}) }
    const root = { original: data, tip: data, pointer: '' }
    const field = 'profile'

    const args: any[] = []
    const result = validations.json.validate(root, field, args, config)
    assert.isTrue(result)
  })

  test('return false when value is a boolean', (assert) => {
    const data = { profile: true }
    const root = { original: data, tip: data, pointer: '' }
    const field = 'profile'

    const args: any[] = []
    const result = validations.json.validate(root, field, args, config)
    assert.isFalse(result)
  })

  test('return false when value is a number', (assert) => {
    const data = { profile: 22 }
    const root = { original: data, tip: data, pointer: '' }
    const field = 'profile'

    const args: any[] = []
    const result = validations.json.validate(root, field, args, config)
    assert.isFalse(result)
  })
})
