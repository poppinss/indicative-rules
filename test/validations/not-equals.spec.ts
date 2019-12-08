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

test.group('Validations | notEquals', () => {
  test('throw erorr when comparison arg is missing', (assert) => {
    const args = []
    const fn = (): any => validations.notEquals.compile!(args)
    assert.throw(fn, 'notEquals:make sure to define comparison value')
  })

  test('return args as it is when valid', (assert) => {
    const args = ['bar']
    assert.deepEqual(validations.notEquals.compile!(args), args)
  })

  test('return false when value of targeted field is equal to defined value', (assert) => {
    const data = { title: 'bar' }
    const root = { original: data, tip: data, pointer: '' }
    const field = 'title'

    const args = ['bar']
    assert.isFalse(validations.notEquals.validate(root, field, args, config))
  })

  test('work fine when value for field does not matches to defined value', (assert) => {
    const data = { title: 'foo' }
    const root = { original: data, tip: data, pointer: '' }
    const field = 'title'

    const args = ['bar']
    const result = validations.notEquals.validate(root, field, args, config)
    assert.isTrue(result)
  })
})
