/**
 * indicative-rules
 *
 * (c) Harminder Virk <virk@adonisjs.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import test from 'japa'
import * as validations from '../src/validations'

const dataPackets = {
  endsWith: {
    missing: {
      name: undefined,
    },
    empty: {
      name: null,
    },
    field: 'name',
    args: ['rk'],
  },
  startsWith: {
    missing: {
      name: undefined,
    },
    empty: {
      name: null,
    },
    field: 'name',
    args: ['vi'],
  },
  equals: {
    missing: {
      name: undefined,
    },
    empty: {
      name: null,
    },
    field: 'name',
    args: ['virk'],
  },
  notIn: {
    missing: {
      type: undefined,
    },
    empty: {
      type: null,
    },
    field: 'type',
    args: [null],
  },
  regex: {
    missing: {
      age: undefined,
    },
    empty: {
      age: null,
    },
    field: 'age',
    args: [new RegExp('^0-9')],
  },
  afterOffsetOf: {
    missing: {
      registerationDate: undefined,
    },
    empty: {
      registerationDate: null,
    },
    field: 'registerationDate',
    args: ['2', 'months'],
  },
  beforeOffsetOf: {
    missing: {
      registerationDate: undefined,
    },
    empty: {
      registerationDate: null,
    },
    field: 'registerationDate',
    args: ['2', 'months'],
  },
  '*': {
    missing: {
      age: undefined,
    },
    empty: {
      age: null,
    },
    field: 'age',
    args: [],
  },
}

const skip = [
  'different',
  'same',
  'required',
  'requiredIf',
  'requiredWhen',
  'requiredWithAny',
  'requiredWithAll',
  'requiredWithoutAny',
  'requiredWithoutAll',
]

test.group('Validations | skippable', () => {
  Object.keys(validations).filter((rule) => !skip.includes(rule)).forEach((rule) => {
    test(`only skip undefined values when existyStrict is true | ${rule}`, (assert) => {
      const validation = validations[rule]
      const config = { existyStrict: true }

      const { missing, empty, field, args } = dataPackets[rule] || dataPackets['*']
      assert.isTrue(validation.validate({ tip: missing, original: missing }, field, args, config))
      assert.isFalse(validation.validate({ tip: empty, original: empty }, field, args, config))
    })
  })
})
