import React from 'react'
import renderer from 'react-test-renderer'

import BlogItemContentHeader from './index'

describe('blog item content header', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<BlogItemContentHeader title='tmp' created='2020-01-01' author='john'/>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
