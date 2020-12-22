import React from 'react'
import renderer from 'react-test-renderer'

import BlogItemMetadataContainer from './index'

it('renders correctly', () => {
  const tree = renderer
    .create(<BlogItemMetadataContainer author={ { name: 'tmp', href: 'tmp' } } created={'2020-01-01'}/>)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
