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

test.group('Sanitizations | upperCase', () => {
  test('converts string to upper case', (assert) => {
    const data = { name: 'istanbul' }
    const root = { tip: data, original: data }
    const field = 'name'

    sanitizations.upperCase.sanitize(root, field, [], {})
    assert.deepEqual(data, { name: 'ISTANBUL' })
  })

  test('locale awareness', (assert) => {
    const data = { name: 'istanbul' }
    const root = { tip: data, original: data }
    const field = 'name'

    sanitizations.upperCase.sanitize(root, field, ['tr'], {})
    assert.deepEqual(data, { name: 'İSTANBUL' })
  })
})
