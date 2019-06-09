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

test.group('Validations | accepted', () => {
  test('should return false when field is defined but not accepted', async (assert) => {
    const data = { terms: false }
    const root = { original: data, tip: data, pointer: '' }
    const field = 'terms'

    const args: any[] = []
    assert.isFalse(validations.accepted.validate(root, field, args, config))
  })

  test('work fine validation when field is defined and accepted using true', async (assert) => {
    const data = { terms: true }
    const root = { original: data, tip: data, pointer: '' }
    const field = 'terms'

    const args: any[] = []
    const result = validations.accepted.validate(root, field, args, config)
    assert.isTrue(result)
  })

  test('work fine validation when field is defined and accepted using string', async (assert) => {
    const data = { terms: 'okay' }
    const root = { original: data, tip: data, pointer: '' }
    const field = 'terms'

    const args: any[] = []
    const result = validations.accepted.validate(root, field, args, config)
    assert.isTrue(result)
  })
})
