import React from 'react'

import { mount, configure } from 'enzyme'
import ReactSeventeenAdapter from '@wojtekmaj/enzyme-adapter-react-17'

import { PostPreviewDate } from '../postPreview'

configure({ adapter: new ReactSeventeenAdapter() })

describe('post preview date', () => {
  test('has class name post-preview-date', () => {
    const wrapper = mount(<PostPreviewDate date={'2020-12-06'}></PostPreviewDate>)
    expect(wrapper.childAt(0).hasClass('post-preview-date')).toBeTruthy()
  })
})
