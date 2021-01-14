import React from 'react'
import renderer from 'react-test-renderer'

import '@testing-library/jest-dom/extend-expect'

import { render, screen } from '@testing-library/react'

import { DateInMMMDDCommaYYYYFormat } from './index'

describe('blog item date', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<DateInMMMDDCommaYYYYFormat date={'2020-01-01'}/>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('has format MMM DD, YYYY', () => {
    render(<DateInMMMDDCommaYYYYFormat date={'2020-01-01'}/>)
    expect(screen.getByText('Jan 01, 2020')).toBeInTheDocument()
  })
})
