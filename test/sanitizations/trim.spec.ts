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

test.group('Sanitizations | trim', () => {
  test('remove whitespace from both sides of a given string.', (assert) => {
    const data = { name: '  virk  ' }
    const root = { tip: data, original: data }
    const field = 'name'

    sanitizations.trim.sanitize(root, field, [], {})
    assert.deepEqual(data, { name: 'virk' })
  })

  test('return same value when it\'s not a string', (assert) => {
    const data = { name: 22 }
    const root = { tip: data, original: data }
    const field = 'name'

    sanitizations.trim.sanitize(root, field, [], {})
    assert.deepEqual(data, { name: 22 })
  })
})
