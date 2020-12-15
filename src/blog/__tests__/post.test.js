import React from 'react'

import { mount, configure } from 'enzyme'
import ReactSeventeenAdapter from '@wojtekmaj/enzyme-adapter-react-17'

import { PostPreviewDescription, PostTitle } from '../post'

configure({ adapter: new ReactSeventeenAdapter() })

describe('post preview title', () => {
  test('has heading', () => {
    const wrapper = mount(<PostTitle title={'test'}></PostTitle>)
    expect(wrapper.find('h1')).toHaveLength(1)
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
