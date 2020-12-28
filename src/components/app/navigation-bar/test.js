import React from 'react'
import renderer from 'react-test-renderer'

import NavigationBar from './index'

jest.mock('react-router-dom', () => {
  return {
    __esModule: true,
    Link: function Link () { return <a/> }
  }
})

describe('navigation bar', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<NavigationBar/>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
