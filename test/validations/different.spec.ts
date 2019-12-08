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

test.group('Validations | different', () => {
  test('throw exception when comparison value is missing', (assert) => {
    const args: any[] = []
    const fn = (): any => validations.different.compile!(args)
    assert.throw(fn, 'different:make sure to define target field for comparison')
  })

  test('return args as it is when valid', (assert) => {
    const args: any[] = ['dob']
    assert.deepEqual(validations.different.compile!(args), args)
  })

  test('return false when value of targeted field is equal to defined field', (assert) => {
    const data = { dob: '2011-20-10', enrollment_date: '2011-20-10' }
    const root = { original: data, tip: data, pointer: '' }
    const field = 'enrollment_date'

    const args = ['dob']
    assert.isFalse(validations.different.validate(root, field, args, config))
  })

  test('skip validation when target field does not exists', (assert) => {
    const data = {'enrollment_date': '2011-20-10'}
    const root = { original: data, tip: data, pointer: '' }
    const field = 'enrollment_date'

    const args = ['dob']
    const result = validations.different.validate(root, field, args, config)
    assert.isTrue(result)
  })

  test('work fine when value for both fields are different', (assert) => {
    const data = { dob: '2011-20-10', 'enrollment_date': '2011-20-20' }
    const root = { original: data, tip: data, pointer: '' }
    const field = 'enrollment_date'

    const args = ['dob']
    const result = validations.different.validate(root, field, args, config)
    assert.isTrue(result)
  })
})
