import React from 'react'

import renderer from 'react-test-renderer'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import ErrorMessage from './index'

describe('error message', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<ErrorMessage text={'test error message'}/>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('renders with given text', () => {
    render(<ErrorMessage text={'test error message'}/>)
    expect(screen.getByText('test error message')).toBeInTheDocument()
  })
})
