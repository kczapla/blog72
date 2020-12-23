import React from 'react'
import renderer from 'react-test-renderer'

import BlogItemImageContainer from './index'

describe('blog item image container', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<BlogItemImageContainer post={ { image: 'tmp' } }/>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
