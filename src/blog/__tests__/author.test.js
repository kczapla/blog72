import React from 'react'
import renderer from 'react-test-renderer'
import { mount, configure } from 'enzyme'
import ReactSeventeenAdapter from '@wojtekmaj/enzyme-adapter-react-17'

import { PostPreviewAuthor } from '../author'

configure({ adapter: new ReactSeventeenAdapter() })

describe('post preview author', () => {
  const getPostPreviewUserWrapper = () => (
    mount(<PostPreviewAuthor name={'john'} href={'/user/1'} img={'/images/john.png'}/>)
  )

  test('has two hyperlinks', () => {
    const wrapper = getPostPreviewUserWrapper()
    expect(wrapper.find('a')).toHaveLength(2)
  })

  test('has class name post-preview-author', () => {
    const wrapper = getPostPreviewUserWrapper()
    expect(wrapper.childAt(0).hasClass('post-preview-author')).toBeTruthy()
  })

  test('has image', () => {
    const wrapper = getPostPreviewUserWrapper()
    expect(wrapper.find('img')).toHaveLength(1)
  })
})
