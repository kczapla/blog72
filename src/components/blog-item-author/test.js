import React from 'react'
import renderer from 'react-test-renderer'

import '@testing-library/jest-dom/extend-expect'

import { render, screen } from '@testing-library/react'

import BlogItemAuthor from './index'

jest.mock('../discrete-text-link')

describe('blog item author', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<BlogItemAuthor href={'https://google.com'} name={'tmp'}/>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('redirects to an author', () => {
    const hrefValue = 'https://google.com'
    render(<BlogItemAuthor href={hrefValue} name={'test'}/>)
    expect(screen.getByRole('link')).toHaveAttribute('href', hrefValue)
  })

  it('has name', () => {
    render(<BlogItemAuthor href={'tmp'} name={'test'}/>)
    expect(screen.getByRole('link')).toHaveTextContent('test')
  })
})
