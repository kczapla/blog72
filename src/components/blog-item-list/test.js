import React from 'react'
import axios from 'axios'

import { render, screen } from '@testing-library/react'

import BlogItemList from './index'

jest.mock('../blog-item', () => {
  return {
    __esModule: true,
    default: function BlogItem () { return <article/> }
  }
})

jest.mock('axios')

describe('blog item list', () => {
  it('has list of blog items', async () => {
    axios.get.mockResolvedValue({ data: [{ id: 1 }, { id: 2 }, { id: 3 }] })
    render(<BlogItemList/>)
    await expect(screen.findAllByRole('article')).resolves.toHaveLength(3)
  })
  it('has not elements', async () => {
    axios.get.mockResolvedValue([])
    render(<BlogItemList/>)
    await expect(screen.findByRole('article')).rejects.toBeTruthy()
  })
})
