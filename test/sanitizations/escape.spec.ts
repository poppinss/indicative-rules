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

test.group('Sanitizations | escape', () => {
  test('escape HTML string', (assert) => {
    const data = { bio: '<div> hello </div>' }
    const root = { tip: data, original: data }
    const field = 'bio'

    sanitizations.escape.sanitize(root, field, [], {})
    assert.deepEqual(data, { bio: '&lt;div&gt; hello &lt;/div&gt;' })
  })

  test('return same value when it\'s not a string', (assert) => {
    const data = { bio: 22 }
    const root = { tip: data, original: data }
    const field = 'bio'

    sanitizations.escape.sanitize(root, field, [], {})
    assert.deepEqual(data, { bio: 22 })
  })

  test('escape string with greater than sign', (assert) => {
    const data = { bio: 's>?bi' }
    const root = { tip: data, original: data }
    const field = 'bio'

    sanitizations.escape.sanitize(root, field, [], {})
    assert.deepEqual(data, { bio: 's&gt;?bi' })
  })
})
