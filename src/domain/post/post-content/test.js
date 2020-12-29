import React from 'react'
import renderer from 'react-test-renderer'

import PostContent from './index'

describe('discrete text link', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<PostContent post={ { content: 'content' } }/>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
