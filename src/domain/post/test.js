import React from 'react'
import axios from 'axios'

import { render, screen, waitForElementToBeRemoved } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Post from './index'

jest.mock('./post-content', () => {
  return {
    __esModule: true,
    default: function PostContent () {
      return <div>{'post content'}</div>
    }
  }
})

jest.mock('./post-header', () => {
  return {
    __esModule: true,
    default: function PostHeader (params) {
      return <div>{params.post.title}</div>
    }
  }
})

jest.mock('axios')
jest.useFakeTimers()

describe('post', () => {
  it('uses fetched data from api', async () => {
    axios.get.mockResolvedValue({ data: { title: 'test title' } })
    render(<Post/>)
    await expect(screen.findByText('test title')).resolves.toBeTruthy()
  })
  it('does not render when fetched data is empty', async () => {
    axios.get.mockResolvedValue({ data: {} })
    render(<Post/>)
    await expect(screen.findByText('post content')).rejects.toBeTruthy()
  })
  it('does not render when error occured while fetching data', async () => {
    axios.get.mockResolvedValue({ data: [] })
    render(<Post/>)
    await expect(screen.findByText('post content')).rejects.toBeTruthy()
  })
  it('renders loading when fetching data', async () => {
    axios.get.mockResolvedValue({ data: { title: 'test title' } })
    render(<Post/>)
    await waitForElementToBeRemoved(() => screen.queryByText('loading'))
  })
})
