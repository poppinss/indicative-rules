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

test.group('Validations | subset', () => {
  test('throw exception when subset values are missing', (assert) => {
    const args = []
    const fn = (): any => validations.subset.compile!(args)
    assert.throw(fn, 'subset:make sure to define subset collection')
  })

  test('returns args when it has length', (assert) => {
    const args = ['author', 'comments', 'related-articles']
    assert.deepEqual(validations.subset.compile!(args), args)
  })

  test('work fine when value is a subset of given superset', (assert) => {
    const data = { include: ['author'] }
    const root = { original: data, tip: data, pointer: '' }
    const field = 'include'

    const args = ['author', 'comments', 'related-articles']
    const result = validations.subset.validate(root, field, args, config)

    assert.isTrue(result)
    assert.deepEqual(data, { include: ['author'] })
  })

  test('work fine when value is a comma delimited string', (assert) => {
    const data: { include: any } = { include: 'author,comments' }
    const field = 'include'
    const root = { original: data, tip: data, pointer: '' }

    const args = ['author', 'comments', 'related-articles']
    const result = validations.subset.validate(root, field, args, config)

    assert.isTrue(result)
    assert.deepEqual(data, { include: ['author', 'comments'] })
  })

  test('return false when value is not a subset of given superset', (assert) => {
    const data = { include: ['author', 'comments', 'invalid-relationship'] }
    const root = { original: data, tip: data, pointer: '' }
    const field = 'include'
    const args = ['author', 'comments', 'related-articles']

    assert.isFalse(validations.subset.validate(root, field, args, config))
    assert.deepEqual(data, { include: ['author', 'comments', 'invalid-relationship'] })
  })

  test('work fine when subset has integer value', (assert) => {
    const data: { include: any } = { include: [10] }
    const root = { original: data, tip: data, pointer: '' }
    const field = 'include'

    const args = ['10', '20']
    const result = validations.subset.validate(root, field, args, config)

    assert.isTrue(result)
    assert.deepEqual(data, { include: ['10'] })
  })

  test('return false for non string values', (assert) => {
    const data = {
      field1: true,
      field2: new Date(),
      field3: 10,
    }
    const root = { original: data, tip: data, pointer: '' }

    const args = ['10', '20']

    assert.isFalse(validations.subset.validate(root, 'field1', args, config))
    assert.isFalse(validations.subset.validate(root, 'field2', args, config))
    assert.isFalse(validations.subset.validate(root, 'field3', args, config))

    assert.deepEqual(data, {
      field1: true,
      field2: new Date(),
      field3: 10,
    })
  })
})
