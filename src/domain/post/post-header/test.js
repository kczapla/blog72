import React from 'react'
import renderer from 'react-test-renderer'

import PostHeader from './index'

jest.mock('../../../components/discrete-text-link')

describe('discrete text link', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<PostHeader post={ { author: { name: 'name', href: 'href' }, title: 'title', created: '2021-01-01' } }/>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
