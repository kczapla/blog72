import React from 'react'

import { mount, configure } from 'enzyme'
import ReactSeventeenAdapter from '@wojtekmaj/enzyme-adapter-react-17'

import { Tag, Tags } from '../tag'

configure({ adapter: new ReactSeventeenAdapter() })

describe('tag', () => {
  it('has defined name', () => {
    const wrapper = mount(<Tag tag={{ name: 'subject', href: 'location' }}/>)
    expect(wrapper.text()).toEqual('subject')
  })
})

describe('tag list', () => {
  it('has two elements if two tags passed', () => {
    const tags = [{ id: 1, name: 'subject', href: 'location' }, { id: 2, name: 'subject', href: 'location' }]
    const wrapper = mount(<Tags tags={tags}></Tags>)
    expect(wrapper.find(Tag)).toHaveLength(2)
  })
})
