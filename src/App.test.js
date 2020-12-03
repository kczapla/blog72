import React from 'react'
import renderer from 'react-test-renderer'
import { mount, configure } from 'enzyme'
import ReactSeventeenAdapter from '@wojtekmaj/enzyme-adapter-react-17'

import PostListElement from './App'

configure({ adapter: new ReactSeventeenAdapter() })

// const getData = () => [
//   {
//     id: 1,
//     title: 'test 1',
//     content: 'test content 1',
//     created: '2012-04-23T18:25:43.511Z'
//   },
//   {
//     id: 2,
//     title: 'test 2',
//     content: 'test content 2 that is larger then 200 chars ebebeebebeebebeebebeebebeebebeebebeebebeebebeebebeebebeebebeebebeebebeebebeebebeebebeebebeebebeebebeebebeebebeebebeebebeebebeebebeebebeebebeebebe',
//     created: '2012-04-23T18:25:43.511Z'
//   },
//   {
//     id: 3,
//     title: 'test 3',
//     content: 'test content 3',
//     created: '2012-04-23T18:25:43.511Z'
//   }
// ]

describe('App', () => {
  // it('renders list of posts', () => {
  //   // const wrapper = mount(<PostsList posts={[null, null, null]}/>)
  //   const wrapper = mount(<PostsList posts={getData()}/>)
  //   expect(wrapper.find(PostListElement).length).toEqual(3)
  // })
  it('renders the app', () => {
    const wrapper = mount(<PostListElement post={['adam', '1/1/1', 'test']}/>)
    expect(wrapper.find(PostListElement).length).toEqual(1)
  })
})
