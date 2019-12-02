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

test.group('Sanitizations | lowerCase', () => {
  test('converts string to lower case', (assert) => {
    const data = { name: 'İstanbul' }
    const root = { tip: data, original: data }
    const field = 'name'

    sanitizations.lowerCase.sanitize(root, field, [], {})
    assert.deepEqual(data, { name: 'i̇stanbul' })
  })

  test('locale awareness', (assert) => {
    const data = { name: 'İstanbul' }
    const root = { tip: data, original: data }
    const field = 'name'

    sanitizations.lowerCase.sanitize(root, field, ['tr'], {})
    assert.deepEqual(data, { name: 'istanbul' })
  })
})
