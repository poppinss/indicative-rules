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

test.group('Sanitizations | Strip tags', () => {
  test('should remove tags from a given string', (assert) => {
    const para = [
      'Click <a href="http://google.com">here</a> to search and visit <a href="http://adonisjs.com">AdonisJs</a>',
    ]

    const data = { content: para[0] }
    const root = { tip: data, original: data }
    const field = 'content'

    sanitizations.stripTags.sanitize(root, field, [], {})
    assert.deepEqual(data, {
      content: 'Click here to search and visit AdonisJs',
    })
  })

  test('whitelist tags', (assert) => {
    const data = { content: 'Click <a href="http://google.com">here</a>' }
    const root = { tip: data, original: data }
    const field = 'content'

    sanitizations.stripTags.sanitize(root, field, ['a'], {})
    assert.deepEqual(data, {
      content: 'Click <a href="http://google.com">here</a>',
    })
  })

  test('should actual value when value is not a string', (assert) => {
    const data = { content: 1111 }
    const root = { tip: data, original: data }
    const field = 'content'

    sanitizations.stripTags.sanitize(root, field, ['a'], {})
    assert.deepEqual(data, {
      content: 1111,
    })
  })
})
