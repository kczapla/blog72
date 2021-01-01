import React from 'react'
import axios from 'axios'

import { render, screen, waitForElementToBeRemoved } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Post from './index'

jest.mock('./post-content', () => {
  return {
    __esModule: true,
    default: function PostContent () {
      return <div/>
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

describe('post', () => {
  it('uses fetched data from api', async () => {
    axios.get.mockResolvedValue({ data: { title: 'test title' } })
    render(<Post/>)
    await expect(screen.findByText('test title')).resolves.toBeTruthy()
  })
//   it('has not elements', async () => {
//     axios.get.mockResolvedValue([])
//     render(<Post/>)
//     await expect(screen.findByRole('article')).rejects.toBeTruthy()
//   })
})
