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

test.group('Sanitizations | Normalize email', () => {
  test('normalize email by lowercasing the domain', (assert) => {
    const data = { email: 'foo@GMAIL.COM' }
    const root = { tip: data, original: data }
    const field = 'email'

    sanitizations.normalizeEmail.sanitize(root, field, [], {})
    assert.deepEqual(data, { email: 'foo@gmail.com' })
  })

  test('remove dots from gmail email address', (assert) => {
    const data = { email: 'john.doe@gmail.com' }
    const root = { tip: data, original: data }
    const field = 'email'

    sanitizations.normalizeEmail.sanitize(root, field, [], {})
    assert.deepEqual(data, { email: 'johndoe@gmail.com' })
  })

  test('should leave value untouched when not a string', (assert) => {
    const data = { email: 1111 }
    const root = { tip: data, original: data }
    const field = 'email'

    sanitizations.normalizeEmail.sanitize(root, field, [], {})
    assert.deepEqual(data, { email: 1111 })
  })
})
