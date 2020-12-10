import React from 'react'

import { mount, configure } from 'enzyme'
import ReactSeventeenAdapter from '@wojtekmaj/enzyme-adapter-react-17'

import { PostPreviewAuthor, PostPreviewTitle, PostPreviewTag, PostPreviewDate, PostPreviewTags, PostPreviewDescription } from '../postPreview'

configure({ adapter: new ReactSeventeenAdapter() })

describe('post preview author', () => {
  const getPostPreviewUserWrapper = () => (
    mount(<PostPreviewAuthor name={'john'} href={'/user/1'} img={'/images/john.png'}/>)
  )

  test('has image', () => {
    const wrapper = getPostPreviewUserWrapper()
    expect(wrapper.find('img')).toHaveLength(1)
  })
})

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

describe('post preview description', () => {
  test('ends with three dots after chars threshold', () => {
    const wrapper = mount(<PostPreviewDescription text={'this is test string'} charLimit={4}/>)
    expect(wrapper.text()).toEqual('this...')
  })

  test('does not ends with dots when text length is below char threshold', () => {
    const wrapper = mount(<PostPreviewDescription text={'this is'} charLimit={7}/>)
    expect(wrapper.text()).toEqual('this is')
  })

  test('has class name post-preview-description', () => {
    const wrapper = mount(<PostPreviewDescription text={'this is'} charLimit={7}/>)
    expect(wrapper.childAt(0).hasClass('post-preview-description')).toBeTruthy()
  })
})
