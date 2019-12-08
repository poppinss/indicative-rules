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

test.group('Validations | above', () => {
  test('throw exception when comparison value is not defined', (assert) => {
    const args: any[] = []
    const fn = (): any => validations.above.compile!(args)
    assert.throw(fn, 'above:make sure to define minValue')
  })

  test('returns args as number when defined', (assert) => {
    const args: any[] = ['22']
    assert.deepEqual(validations.above.compile!(args), [22])
  })

  test('return false when value of field is less than defined value', (assert) => {
    const data = { age: 16 }
    const root = { tip: data, original: data, pointer: '' }
    const field = 'age'
    const args = [17]

    assert.isFalse(validations.above.validate(root, field, args, config))
  })

  test('return false when value of field is equal to the defined value', (assert) => {
    const data = { age: 17 }
    const root = { tip: data, original: data, pointer: '' }
    const field = 'age'
    const args = [17]

    assert.isFalse(validations.above.validate(root, field, args, config))
  })

  test('work fine when value of field is greater than defined value', (assert) => {
    const data = { age: 18 }
    const root = { tip: data, original: data, pointer: '' }
    const field = 'age'
    const args = [17]

    const result = validations.above.validate(root, field, args, config)
    assert.isTrue(result)
  })
})
