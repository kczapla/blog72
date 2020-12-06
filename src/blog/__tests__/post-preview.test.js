import React from 'react'

import { mount, configure, shallow } from 'enzyme'
import ReactSeventeenAdapter from '@wojtekmaj/enzyme-adapter-react-17'

import { PostPreviewTitle, PostPreviewTag, PostPreviewDate, PostPreviewTags } from '../post'

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
  const getPostPreviewTag = () => {
    return mount(<PostPreviewTag tag={{ name: 'test', href: 'http://test.com' }}></PostPreviewTag>)
  }

  test('has class name post-preview-tag', () => {
    const wrapper = getPostPreviewTag()
    expect(wrapper.childAt(0).hasClass('post-preview-tag')).toBeTruthy()
  })

  test('uses provided link as href attribute', () => {
    const wrapper = getPostPreviewTag()
    expect(wrapper.contains(<a href='http://test.com'>test</a>))
  })
})

describe('post preview tags', () => {
  const getPostPreviewTags = () => {
    const tags = [{ id: 1, name: 'test1', href: 'http://test1.com' }, { id: 2, name: 'test2', href: 'http://test2.com' }]
    return mount(<PostPreviewTags tags={tags}></PostPreviewTags>)
  }

  test('has class name post-preview-tags', () => {
    const wrapper = getPostPreviewTags()
    expect(wrapper.childAt(0).hasClass('post-preview-tags')).toBeTruthy()
  })

  test('has two tags entries', () => {
    const wrapper = getPostPreviewTags()
    expect(wrapper.find(PostPreviewTag)).toHaveLength(2)
  })
})
