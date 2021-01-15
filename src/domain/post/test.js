import React from 'react'
import axios from 'axios'

import { screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import { renderRouterWithInitialEntries } from '../../services/test-utils'

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
    renderRouterWithInitialEntries({ initialEntries: ['/posts/1'] })
    await expect(screen.findByText('test title')).resolves.toBeTruthy()
  })
  it('does not render when fetched data is empty', async () => {
    axios.get.mockRejectedValue('error')
    renderRouterWithInitialEntries({ initialEntries: ['/posts/1'] })
    await expect(screen.findByText('page not found')).resolves.toBeTruthy()
  })
  it('renders loading when fetching data', async () => {
    axios.get.mockResolvedValue({ data: { title: 'test title' } })
    renderRouterWithInitialEntries({ initialEntries: ['/posts/1'] })
    await waitForElementToBeRemoved(() => screen.queryByText('loading'))
  })
  it('fetches post with an id from uri', async () => {
    const mockedAxiosGet = jest.fn().mockRejectedValue('error')
    axios.get = mockedAxiosGet
    renderRouterWithInitialEntries({ initialEntries: ['/posts/1'] })
    await waitFor(() => { expect(mockedAxiosGet.mock.calls[0][0]).toBe('/posts/1') })
  })
})
