import React from 'react'
import renderer from 'react-test-renderer'

import PostHeader from './index'

describe('discrete text link', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<PostHeader post={ { title: 'title' } }/>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
