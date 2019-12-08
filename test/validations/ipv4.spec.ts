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

test.group('Validations | ipv4', () => {
  test('return false when value is not a valid ipv4 address', (assert) => {
    const data = { user_ip: '2001:DB8:0:0:1::1' }
    const root = { original: data, tip: data, pointer: '' }
    const field = 'user_ip'

    const args: any[] = []
    assert.isFalse(validations.ipv4.validate(root, field, args, config))
  })

  test('work fine when value is a valid ipv4 address', (assert) => {
    const data = { user_ip: '127.0.0.1' }
    const root = { original: data, tip: data, pointer: '' }
    const field = 'user_ip'

    const args: any[] = []
    const result = validations.ipv4.validate(root, field, args, config)
    assert.isTrue(result)
  })

  test('return false when value is not a valid string', (assert) => {
    const data = { user_ip: 10 }
    const root = { original: data, tip: data, pointer: '' }
    const field = 'user_ip'

    const args: any[] = []
    assert.isFalse(validations.ipv4.validate(root, field, args, config))
  })
})
