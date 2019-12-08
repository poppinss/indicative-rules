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

test.group('Validations | alphaNumeric', () => {
  test('return false when value is not alpha numeric', (assert) => {
    const data = { username: 'virk@123' }
    const root = { original: data, tip: data, pointer: '' }
    const field = 'username'
    const args: any[] = []

    assert.isFalse(validations.alphaNumeric.validate(root, field, args, config))
  })

  test('return false when value is a number', (assert) => {
    const data = { username: 123 }
    const root = { original: data, tip: data, pointer: '' }
    const field = 'username'
    const args: any[] = []

    assert.isFalse(validations.alphaNumeric.validate(root, field, args, config))
  })

  test('work fine when value is a valid alpha numeric', (assert) => {
    const data = { username: 'virk123' }
    const root = { original: data, tip: data, pointer: '' }
    const field = 'username'

    const args: any[] = []
    const result = validations.alphaNumeric.validate(root, field, args, config)
    assert.isTrue(result)
  })
})
