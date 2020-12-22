import React from 'react'
import renderer from 'react-test-renderer'

import BlogItemDate from './index'

it('renders correctly', () => {
  const tree = renderer
    .create(<BlogItemDate date={'2020-01-01'}/>)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
