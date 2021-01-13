import React from 'react'
import axios from 'axios'

import { MemoryRouter } from 'react-router'

import { render, screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Post from './index'

import Routes from '../../components/routes'

const renderWithRouter = () => {
  render(
    <MemoryRouter initialEntries={['/posts/1']}>
      <Routes/>
    </MemoryRouter>
  )
}

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
    renderWithRouter(<Post/>)
    await expect(screen.findByText('test title')).resolves.toBeTruthy()
  })
  it('does not render when fetched data is empty', async () => {
    axios.get.mockRejectedValue('error')
    renderWithRouter(<Post/>)
    await expect(screen.findByText('page not found')).resolves.toBeTruthy()
  })
  it('renders loading when fetching data', async () => {
    axios.get.mockResolvedValue({ data: { title: 'test title' } })
    renderWithRouter(<Post/>)
    await waitForElementToBeRemoved(() => screen.queryByText('loading'))
  })
  it('fetches post with an id from uri', async () => {
    const mockedAxiosGet = jest.fn().mockRejectedValue('error')
    axios.get = mockedAxiosGet
    renderWithRouter(<Post/>)
    await waitFor(() => { expect(mockedAxiosGet.mock.calls[0][0]).toBe('/posts/1') })
  })
})
