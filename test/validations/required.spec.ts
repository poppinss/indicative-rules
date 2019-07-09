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

test.group('Validations | required', () => {
  test('return false when field is not defined', async (assert) => {
    const data = {}
    const root = { original: data, tip: data, pointer: '' }
    const field = 'name'
    const args: any[] = []
    assert.isFalse(validations.required.validate(root, field, args, config))
  })

  test('return false when field is defined but empty', async (assert) => {
    const data = { name: '' }
    const root = { original: data, tip: data, pointer: '' }
    const field = 'name'

    const args: any[] = []
    assert.isFalse(validations.required.validate(root, field, args, config))
  })

  test('return true when field is defined and has value', async (assert) => {
    const data = { name: 'virk' }
    const root = { original: data, tip: data, pointer: '' }
    const field = 'name'

    const args: any[] = []
    const result = validations.required.validate(root, field, args, config)
    assert.isTrue(result)
  })

  test('return true when field is defined and has negative boolean value', async (assert) => {
    const data = { name: false }
    const root = { original: data, tip: data, pointer: '' }
    const field = 'name'

    const args: any[] = []
    const result = validations.required.validate(root, field, args, config)
    assert.isTrue(result)
  })

  test('return true when field is defined and has negative numeric value', async (assert) => {
    const data = { name: 0 }
    const root = { original: data, tip: data, pointer: '' }
    const field = 'name'

    const args: any[] = []
    const result = validations.required.validate(root, field, args, config)
    assert.isTrue(result)
  })

  test('return true when field value is empty array', async (assert) => {
    const data = { users: [] }
    const root = { original: data, tip: data, pointer: '' }
    const field = 'users'

    const args: any[] = []
    const result = validations.required.validate(root, field, args, config)
    assert.isTrue(result)
  })

  test('return true when field value is empty object', async (assert) => {
    const data = { user: {} }
    const root = { original: data, tip: data, pointer: '' }
    const field = 'user'

    const args: any[] = []
    const result = validations.required.validate(root, field, args, config)
    assert.isTrue(result)
  })
})
