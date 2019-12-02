'use strict'

/**
 * indicative
 *
 * (c) Harminder Virk <virk@adonisjs.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
*/

import test from 'japa'
import * as sanitizations from '../../src/sanitizations'

test.group('Sanitizations | stripLinks', () => {
  test('remove anchor tags from a string', (assert) => {
    const data = { bio: '<a href=""> google.com </a>' }
    const root = { tip: data, original: data }
    const field = 'bio'

    sanitizations.stripLinks.sanitize(root, field, [], {})
    assert.deepEqual(data, { bio: 'google.com' })
  })

  test('return same value when it\'s not a string', (assert) => {
    const data = { bio: 22 }
    const root = { tip: data, original: data }
    const field = 'bio'

    sanitizations.stripLinks.sanitize(root, field, [], {})
    assert.deepEqual(data, { bio: 22 })
  })
})
