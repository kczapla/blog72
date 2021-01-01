import React from 'react'

import PostHeader from './post-header'
import PostContent from './post-content'
import PostContainer from './post-container'

import { useFetchPost } from './hook'

const Post = () => {
  const post = useFetchPost(1)
  if (post === null) {
    return null
  }

  return (
    <PostContainer>
      <PostHeader post={post}/>
      <PostContent post={post}/>
    </PostContainer>
  )
}

export default Post
