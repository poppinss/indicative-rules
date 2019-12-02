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

test.group('Validations | url', () => {
  test('return false when value is not a valid url', async (assert) => {
    const data = { github_profile: 'foo' }
    const root = { original: data, tip: data, pointer: '' }
    const field = 'github_profile'
    const args: any[] = []

    assert.isFalse(validations.url.validate(root, field, args, config))
  })

  test('work fine when value is a valid url', async (assert) => {
    const data = { github_profile: 'http://github.com/thetutlage' }
    const root = { original: data, tip: data, pointer: '' }
    const field = 'github_profile'
    const args: any[] = []

    const result = validations.url.validate(root, field, args, config)
    assert.isTrue(result)
  })

  test('return false when value is a number', async (assert) => {
    const data = { github_profile: 10 }
    const root = { original: data, tip: data, pointer: '' }
    const field = 'github_profile'
    const args: any[] = []

    assert.isFalse(validations.url.validate(root, field, args, config))
  })

  test('return false when value is a boolean', async (assert) => {
    const data = { github_profile: true }
    const root = { original: data, tip: data, pointer: '' }
    const field = 'github_profile'
    const args: any[] = []

    assert.isFalse(validations.url.validate(root, field, args, config))
  })

  test('return false when value is a date', async (assert) => {
    const data = { github_profile: new Date() }
    const root = { original: data, tip: data, pointer: '' }
    const field = 'github_profile'
    const args: any[] = []

    assert.isFalse(validations.url.validate(root, field, args, config))
  })
})
