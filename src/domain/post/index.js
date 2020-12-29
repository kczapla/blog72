import React from 'react'

import PostHeader from './post-header'
import PostContent from './post-content'
import PostContainer from './post-container'

const Post = () => {
  return (
    <PostContainer>
      <PostHeader post={{ title: 'test', created: '2020-01-01', author: { name: 'john', href: 'https://google.com' } }}/>
      <PostContent post={{ content: 'content' }}/>
    </PostContainer>
  )
}

export default Post
