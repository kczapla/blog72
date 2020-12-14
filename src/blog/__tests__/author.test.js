import React from 'react'

import { mount, configure } from 'enzyme'
import ReactSeventeenAdapter from '@wojtekmaj/enzyme-adapter-react-17'

import { PostPreviewAuthor } from '../author'

configure({ adapter: new ReactSeventeenAdapter() })

describe('post preview author', () => {
  const getPostPreviewUserWrapper = () => (
    mount(<PostPreviewAuthor name={'john'} href={'/user/1'} img={'/images/john.png'}/>)
  )

  it('has image', () => {
    const wrapper = getPostPreviewUserWrapper()
    expect(wrapper.find('img')).toHaveLength(1)
  })

  it('has name', () => {
    const wrapper = getPostPreviewUserWrapper()
    expect(wrapper.text()).toEqual('john')
  })

  it('has hyperlink', () => {
    const wrapper = getPostPreviewUserWrapper()
    expect(wrapper.find('a')).toHaveLength(1)
  })
})
