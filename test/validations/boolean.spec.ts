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

test.group('Validations | boolean', () => {
  test('return false when value is a number', async (assert) => {
    const data = { is_admin: 20 }
    const root = { original: data, tip: data, pointer: '' }
    const field = 'is_admin'

    const args: any[] = []
    assert.isFalse(validations.boolean.validate(root, field, args, config))
    assert.deepEqual(data, { is_admin: 20 })
  })

  test('return false when value is a string', async (assert) => {
    const data = { is_admin: '20' }
    const root = { original: data, tip: data, pointer: '' }
    const field = 'is_admin'

    const args: any[] = []

    assert.isFalse(validations.boolean.validate(root, field, args, config))
    assert.deepEqual(data, { is_admin: '20' })
  })

  test('work fine when value is a valid positive boolean', async (assert) => {
    const data = { is_admin: true }
    const root = { original: data, tip: data, pointer: '' }
    const field = 'is_admin'

    const args: any[] = []
    const result = validations.boolean.validate(root, field, args, config)

    assert.isTrue(result)
    assert.deepEqual(data, { is_admin: true })
  })

  test('work fine when value is a valid negative boolean', async (assert) => {
    const data = { is_admin: false }
    const root = { original: data, tip: data, pointer: '' }
    const field = 'is_admin'

    const args: any[] = []
    const result = validations.boolean.validate(root, field, args, config)

    assert.isTrue(result)
    assert.deepEqual(data, { is_admin: false })
  })

  test('work fine when value is a valid positive numeric boolean', async (assert) => {
    const data: { is_admin: any } = { is_admin: 1 }
    const root = { original: data, tip: data, pointer: '' }
    const field = 'is_admin'

    const args: any[] = []
    const result = validations.boolean.validate(root, field, args, config)

    assert.isTrue(result)
    assert.deepEqual(data, { is_admin: true })
  })

  test('work fine when value is a valid negative numeric boolean', async (assert) => {
    const data: { is_admin: any } = { is_admin: 0 }
    const root = { original: data, tip: data, pointer: '' }
    const field = 'is_admin'

    const args: any[] = []
    const result = validations.boolean.validate(root, field, args, config)

    assert.isTrue(result)
    assert.deepEqual(data, { is_admin: false })
  })

  test('work fine when value is a string representation of 0', async (assert) => {
    const data: { is_admin: any } = { is_admin: '0' }
    const root = { original: data, tip: data, pointer: '' }
    const field = 'is_admin'

    const args: any[] = []
    const result = validations.boolean.validate(root, field, args, config)

    assert.isTrue(result)
    assert.deepEqual(data, { is_admin: false })
  })

  test('work fine when value is a string representation of 1', async (assert) => {
    const data: { is_admin: any } = { is_admin: '1' }
    const root = { original: data, tip: data, pointer: '' }
    const field = 'is_admin'

    const args: any[] = []
    const result = validations.boolean.validate(root, field, args, config)

    assert.isTrue(result)
    assert.deepEqual(data, { is_admin: true })
  })

  test('work fine when value is a string representation of true', async (assert) => {
    const data: { is_admin: any } = { is_admin: 'true' }
    const field = 'is_admin'
    const root = { original: data, tip: data, pointer: '' }

    const args: any[] = []
    const result = validations.boolean.validate(root, field, args, config)

    assert.isTrue(result)
    assert.deepEqual(data, { is_admin: true })
  })

  test('work fine when value is a string representation of false', async (assert) => {
    const data: { is_admin: any } = { is_admin: 'false' }
    const field = 'is_admin'
    const root = { original: data, tip: data, pointer: '' }

    const args: any[] = []
    const result = validations.boolean.validate(root, field, args, config)

    assert.isTrue(result)
    assert.deepEqual(data, { is_admin: false })
  })
})
