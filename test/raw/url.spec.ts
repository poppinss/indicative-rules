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
import * as Is from '../../src/raw'

test.group('raw | url', () => {
  test('return false when input is not a valid url', (assert) => {
    assert.isFalse(Is.url('foo'))
  })

  test('return false when input does not contain protocol', (assert) => {
    assert.isFalse(Is.url('www.foo.com'))
  })

  test('return true when input is a valid http url', (assert) => {
    assert.isTrue(Is.url('http://foo.com'))
  })

  test('return true when input is a valid https url', (assert) => {
    assert.isTrue(Is.url('https://foo.com'))
  })

  test('return true when input contains something else than .com', (assert) => {
    assert.isTrue(Is.url('https://foo.in'))
  })

  test('return true when input contains multi level TLD', (assert) => {
    assert.isTrue(Is.url('https://foo.co.in'))
  })

  test('return true when input contains 63 characters TLD', (assert) => {
    assert.isTrue(Is.url('https://example.abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijk'))
  })

  test('return false when input contains more than 63 characters TLD', (assert) => {
    assert.isFalse(Is.url('https://example.abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijkl'))
  })

  test('return true when input contains only localhost', (assert) => {
    assert.isTrue(Is.url('http://localhost'))
  })

  test('return true when input contains localhost with port', (assert) => {
    assert.isTrue(Is.url('http://localhost:80'))
  })

  test('return true when domain name part contains 1 character', (assert) => {
    assert.isTrue(Is.url('https://t.co'))
  })

  test('return true when is an IP', (assert) => {
    assert.isTrue(Is.url('http://192.168.99.100'))
  })

  test('return true when is an IP with port', (assert) => {
    assert.isTrue(Is.url('http://192.168.99.100:8083'))
  })
})
