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

test.group('Validations | float', () => {
  test('work fine when string value can be casted from a string', (assert) => {
    const data: { marks: any } = { marks: '10' }
    const root = { original: data, tip: data, pointer: '' }
    const field = 'marks'

    const args: any[] = []
    const result = validations.float.validate(root, field, args, config)

    assert.isTrue(result)
    assert.deepEqual(data, { marks: 10 })
  })

  test('return true when value has decimal points', (assert) => {
    const data = { marks: 10.1 }
    const root = { original: data, tip: data, pointer: '' }
    const field = 'marks'

    const args: any[] = []

    assert.isTrue(validations.float.validate(root, field, args, config))
    assert.deepEqual(data, { marks: 10.1 })
  })

  test('work fine when value is an integer', (assert) => {
    const data = { marks: 10 }
    const root = { original: data, tip: data, pointer: '' }
    const field = 'marks'

    const args: any[] = []
    const result = validations.float.validate(root, field, args, config)

    assert.isTrue(result)
    assert.deepEqual(data, { marks: 10 })
  })

  test('work fine when value is an integer with zero precision', (assert) => {
    const data = { marks: 10.0 }
    const root = { original: data, tip: data, pointer: '' }
    const field = 'marks'

    const args: any[] = []
    const result = validations.float.validate(root, field, args, config)

    assert.isTrue(result)
    assert.deepEqual(data, { marks: 10 })
  })

  test('return true when field has a decimal string value', (assert) => {
    const data: { marks: any } = { marks: '10.10' }
    const field = 'marks'
    const root = { original: data, tip: data, pointer: '' }

    const args: any[] = []
    const result = validations.float.validate(root, field, args, config)

    assert.isTrue(result)
    assert.deepEqual(data, { marks: 10.10 })
  })
})
