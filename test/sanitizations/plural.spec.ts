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

test.group('Sanitizations | Plural', () => {
  test('should pluralize a given string', (assert) => {
    const data = { content: 'person' }
    const root = { tip: data, original: data }
    const field = 'content'

    sanitizations.plural.sanitize(root, field, [], {})
    assert.deepEqual(data, { content: 'people' })
  })

  test('return exact value when not a string', (assert) => {
    const data = { content: 22 }
    const root = { tip: data, original: data }
    const field = 'content'

    sanitizations.plural.sanitize(root, field, [], {})
    assert.deepEqual(data, { content: 22 })
  })
})
