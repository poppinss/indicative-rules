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

test.group('Validations | notIn', () => {
  test('throw exception when notIn collection is not defined', async (assert) => {
    const args = []
    const fn = () => validations.notIn.compile!(args)
    assert.throw(fn, 'notIn:make sure to define search collection')
  })

  test('return args as it is when valid', async (assert) => {
    const args = ['admin', 'super', 'root']
    assert.deepEqual(validations.notIn.compile!(args), args)
  })

  test('return false when field value is in defined fields', async (assert) => {
    const data = { username: 'admin' }
    const root = { original: data, tip: data, pointer: '' }
    const field = 'username'

    const args = ['admin', 'super', 'root']
    assert.isFalse(validations.notIn.validate(root, field, args, config))
  })

  test('work fine when field value is not one of the given options', async (assert) => {
    const data = { username: 'foo' }
    const root = { original: data, tip: data, pointer: '' }
    const field = 'username'

    const args = ['admin', 'super', 'root']
    const result = validations.notIn.validate(root, field, args, config)
    assert.isTrue(result)
  })
})
