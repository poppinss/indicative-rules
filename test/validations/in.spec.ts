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

test.group('Validations | in', () => {
  test('throw exception when `in` collection is not defined', (assert) => {
    const args = []
    const fn = (): any => validations.in.compile!(args)
    assert.throw(fn, 'in:make sure to define search collection')
  })

  test('returns args as it is when valid', (assert) => {
    const args = ['foo', 'bar']
    assert.deepEqual(validations.in.compile!(args), args)
  })

  test('return false when field value is not in defined fields', (assert) => {
    const data = { gender: 'Foo' }
    const root = { original: data, tip: data, pointer: '' }
    const field = 'gender'

    const args = ['F', 'M', 'O']
    assert.isFalse(validations.in.validate(root, field, args, config))
  })

  test('work fine when value of field is under one of the defined values', (assert) => {
    const data = { gender: 'F' }
    const root = { original: data, tip: data, pointer: '' }
    const field = 'gender'

    const args = ['F', 'M', 'O']
    const result = validations.in.validate(root, field, args, config)
    assert.isTrue(result)
  })

  test('work fine when expected values are integer', (assert) => {
    const data = { marks: 10 }
    const root = { original: data, tip: data, pointer: '' }
    const field = 'marks'

    const args = [10, 20, 40]
    const result = validations.in.validate(root, field, args, config)
    assert.isTrue(result)
  })
})
