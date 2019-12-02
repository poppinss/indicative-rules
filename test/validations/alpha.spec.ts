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

test.group('Validations | alpha', () => {
  test('return false when value is not alpha', async (assert) => {
    const data = { username: 'virk1234' }
    const field = 'username'
    const root = { original: data, tip: data, pointer: '' }

    const args: any[] = []
    assert.isFalse(validations.alpha.validate(root, field, args, config))
  })

  test('return false when value is number', async (assert) => {
    const data = { username: 1234 }
    const field = 'username'
    const root = { original: data, tip: data, pointer: '' }

    const args: any[] = []
    assert.isFalse(validations.alpha.validate(root, field, args, config))
  })

  test('work fine when value is a valid alpha', async (assert) => {
    const data = { username: 'virk' }
    const field = 'username'
    const root = { original: data, tip: data, pointer: '' }

    const args: any[] = []
    const result = validations.alpha.validate(root, field, args, config)
    assert.isTrue(result)
  })
})
