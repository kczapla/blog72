import React from 'react'
import renderer from 'react-test-renderer'

import BlogItemImage from './index'

it('renders correctly', () => {
  const tree = renderer
    .create(<BlogItemImage image={'tmp'}/>)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
