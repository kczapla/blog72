import React from 'react'

import { mount, configure } from 'enzyme'
import ReactSeventeenAdapter from '@wojtekmaj/enzyme-adapter-react-17'

import { PostPreviewTitle, PostPreviewDate, PostPreviewDescription } from '../postPreview'

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
