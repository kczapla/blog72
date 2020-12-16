import React from 'react'

import PostPreview from './postPreview'

const data = [
  {
    title: 'this is post about cmake',
    created: '2020-10-10',
    user: {
      name: 'john',
      image: 'https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png',
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
    ],
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    title: 'yet another post about c++!',
    created: '2020-10-10',
    user: {
      name: 'john',
      image: 'https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png',
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
    ],
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  }
]

export const PostList = () => {
  const posts = data.map((post, key) => {
    console.log(post.toString())
    return <PostPreview key={key} post={post}/>
  })

  return (
    <div className='post-list'>
      {posts}
    </div>
  )
}

export default PostList
