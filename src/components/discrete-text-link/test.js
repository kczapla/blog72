import React from 'react'
import renderer from 'react-test-renderer'
import { MemoryRouter } from 'react-router-dom'

import DiscreteTextLink from './index'

describe('discrete text link', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<MemoryRouter><DiscreteTextLink href={'https://google.com'} text={'tmp'}/></MemoryRouter>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
