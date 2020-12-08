import React from 'react'

import PostPreviewHeader from './blog'

const data = [
  {
    created: '2020-10-10',
    user: {
      name: 'john',
      image: 'image',
      userLink: 'https://google.com'
    },
    tags: [
      {
        id: 0,
        name: 'tag1',
        href: 'https://google.com'
      },
      {
        id: 1,
        name: 'tag2',
        href: 'https://google.com'
      },
      {
        id: 2,
        name: 'tag3',
        href: 'https://google.com'
      }
    ]
  }
]

const App = () => <PostPreviewHeader post={data[0]}/>

export default App
