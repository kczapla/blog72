import React from 'react'

import PostPreview from './postPreview'

const data = [
  {
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
    ]
  },
  {
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
    ]
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
