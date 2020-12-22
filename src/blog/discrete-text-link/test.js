import React from 'react'
import renderer from 'react-test-renderer'

import DiscreteTextLink from './index'

describe('discrete text link', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<DiscreteTextLink href={'https://google.com'} text={'tmp'}/>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
