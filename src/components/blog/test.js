import React from 'react'
import axios from 'axios'

import { render, screen, waitForElementToBeRemoved } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Blog from './index'

jest.mock('../blog-item-list', () => {
  return {
    __esModule: true,
    default: function BlogItemList (params) {
      return <div>{params.posts.testMessage}</div>
    }
  }
})

jest.mock('axios')
jest.useFakeTimers()

describe('blog', () => {
  it('fetches posts from api', async () => {
    axios.get.mockResolvedValue({ data: { testMessage: 'this is test' } })
    render(<Blog/>)
    await expect(screen.findByText('this is test')).resolves.toBeTruthy()
  })
  it('renders loading while fetching blog items', async () => {
    axios.get.mockResolvedValue({ data: { testMessage: 'this is test' } })
    render(<Blog/>)
    await waitForElementToBeRemoved(() => screen.queryByText('loading'))
  })
})
