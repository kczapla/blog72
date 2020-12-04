import React from 'react'

import { mount, configure } from 'enzyme'
import ReactSeventeenAdapter from '@wojtekmaj/enzyme-adapter-react-17'

import { PostPreviewTitle } from '../post'

configure({ adapter: new ReactSeventeenAdapter() })

describe('post preview title', () => {
  test('has heading', () => {
    const wrapper = mount(<PostPreviewTitle title={'test'}></PostPreviewTitle>)
    expect(wrapper.find('h2')).toHaveLength(1)
  })

  test('has class name post-preview-title', () => {
    const wrapper = mount(<PostPreviewTitle title={'test'}></PostPreviewTitle>)
    expect(wrapper.childAt(0).hasClass('post-preview-title')).toBeTruthy()
  })
})
