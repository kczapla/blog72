import React from 'react'
import axios from 'axios'

import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import BlogItemList from './index'

jest.mock('../blog-item', () => {
  return {
    __esModule: true,
    default: function BlogItem () { return <section>{'test section'}</section> }
  }
})

jest.mock('axios')

describe('blog item list', () => {
  it('has list of blog items', () => {
    const posts = [{ id: 1, testMessage: '' }, { id: 2, testMessage: '' }, { id: 3, testMessage: '' }]
    render(<BlogItemList posts={posts}/>)
    expect(screen.getAllByText('test section')).toHaveLength(3)
  })
  it('has not elements', () => {
    axios.get.mockResolvedValue([])
    render(<BlogItemList posts={[]}/>)
    expect(screen.queryAllByText('test section')).toHaveLength(0)
  })
})
