import React from 'react'
import renderer from 'react-test-renderer'

import BlogItemTitle from './index'

describe('discrete text link', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<BlogItemTitle title={'test'}/>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
