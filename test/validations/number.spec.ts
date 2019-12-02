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

test.group('Validations | number', () => {
  test('work fine when the field value is a number (float)', async (assert) => {
    const data = { price: 12.01 }
    const root = { original: data, tip: data, pointer: '' }
    const field = 'price'

    const args: any[] = []
    const result = validations.number.validate(root, field, args, config)

    assert.isTrue(result)
    assert.deepEqual(data, { price: 12.01 })
  })

  test('work fine when the field value is a number (integer)', async (assert) => {
    const data = { age: 47 }
    const root = { original: data, tip: data, pointer: '' }
    const field = 'age'

    const args: any[] = []
    const result = validations.number.validate(root, field, args, config)

    assert.isTrue(result)
    assert.deepEqual(data, { age: 47 })
  })

  test('cast strings to numbers', async (assert) => {
    const data: { price: any } = { price: '10' }
    const field = 'price'
    const root = { original: data, tip: data, pointer: '' }

    const args: any[] = []
    const result = validations.number.validate(root, field, args, config)

    assert.isTrue(result)
    assert.deepEqual(data, { price: 10 })
  })

  test('cast strings with decimal values to numbers', async (assert) => {
    const data: { price: any } = { price: '10.40' }
    const field = 'price'
    const root = { original: data, tip: data, pointer: '' }

    const args: any[] = []
    const result = validations.number.validate(root, field, args, config)

    assert.isTrue(result)
    assert.deepEqual(data, { price: 10.40 })
  })

  test('return false when the field value is a string', async (assert) => {
    const data = { price: 'AnError' }
    const root = { original: data, tip: data, pointer: '' }
    const field = 'price'

    const args: any[] = []
    assert.isFalse(validations.number.validate(root, field, args, config))
    assert.deepEqual(data, { price: 'AnError' })
  })

  test('return false when the field value is a negative number', async (assert) => {
    const data = { price: -10 }
    const root = { original: data, tip: data, pointer: '' }
    const field = 'price'

    const args: any[] = []
    assert.isFalse(validations.number.validate(root, field, args, config))
    assert.deepEqual(data, { price: -10 })
  })

  test('return false when the field value is a boolean', async (assert) => {
    const data = { price: true }
    const root = { original: data, tip: data, pointer: '' }
    const field = 'price'

    const args: any[] = []
    assert.isFalse(validations.number.validate(root, field, args, config))
    assert.deepEqual(data, { price: true })
  })
})
