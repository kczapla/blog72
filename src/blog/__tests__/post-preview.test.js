import React from 'react'

import { mount, configure, shallow } from 'enzyme'
import ReactSeventeenAdapter from '@wojtekmaj/enzyme-adapter-react-17'

import { PostPreviewTitle, PostPreviewTag, PostPreviewDate } from '../post'

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

describe('post preview date', () => {
  test('has class name post-preview-date', () => {
    const wrapper = mount(<PostPreviewDate date={'2020-12-06'}></PostPreviewDate>)
    expect(wrapper.childAt(0).hasClass('post-preview-date')).toBeTruthy()
  })
})

describe('post preview tag', () => {
  test('has class name post-preview-tag', () => {
    const wrapper = mount(<PostPreviewTag name={'test'}></PostPreviewTag>)
    expect(wrapper.childAt(0).hasClass('post-preview-tag')).toBeTruthy()
  })

  test('uses provided link as href attribute', () => {
    const wrapper = mount(<PostPreviewTag name={'test'} href={'http://test.com'}></PostPreviewTag>)
    expect(wrapper.contains(<a href='http://test.com'>test</a>))
  })
})
