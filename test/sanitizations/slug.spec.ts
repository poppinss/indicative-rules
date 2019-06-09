'use strict'

/**
 * indicative
 *
 * (c) Harminder Virk <virk@adonisjs.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
*/

import * as test from 'japa'
import * as sanitizations from '../../src/sanitizations'

test.group('Sanitizations | Slug', () => {
  test('should convert a value to a slug', (assert) => {
    const data = { slug: 'learn jquery in 30minutes' }
    const root = { tip: data, original: data }
    const field = 'slug'

    sanitizations.slug.sanitize(root, field, [], {})
    assert.deepEqual(data, { slug: 'learn-jquery-in-30-minutes' })
  })

  test('should convert a weired value to a slug', (assert) => {
    const data = { slug: 'weird[case' }
    const root = { tip: data, original: data }
    const field = 'slug'

    sanitizations.slug.sanitize(root, field, [], {})
    assert.deepEqual(data, { slug: 'weird-case' })
  })

  test('should convert a dot seperate value to a slug', (assert) => {
    const data = { slug: 'dot.case' }
    const root = { tip: data, original: data }
    const field = 'slug'

    sanitizations.slug.sanitize(root, field, [], {})
    assert.deepEqual(data, { slug: 'dot-case' })
  })

  test('should convert a weird character to a slug', (assert) => {
    const data = { slug: 'tôi tên là đức tạ' }
    const root = { tip: data, original: data }
    const field = 'slug'

    sanitizations.slug.sanitize(root, field, [], {})
    assert.deepEqual(data, { slug: 'toi-ten-la-duc-ta' })
  })

  test('return exact value when its a number', (assert) => {
    const data = { slug: 12 }
    const root = { tip: data, original: data }
    const field = 'slug'

    sanitizations.slug.sanitize(root, field, [], {})
    assert.deepEqual(data, { slug: 12 })
  })
})
