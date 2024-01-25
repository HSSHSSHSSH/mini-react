import {it, describe, expect} from 'vitest'
import React from '../core/React.js'

describe('createElement', () => {
  it('should return vdom for element', () => {
    const el = React.createElement('div', {id: 'foo'}, 'bar')
    expect(el).toStrictEqual({
      type: 'div',
      props: {
        id: 'foo',
        children: [
          {
            type: 'TEXT_ELEMENT',
            props: {
              nodeValue: 'bar',
              children: []
            }
          }
        ]
      }
    })
  })
})