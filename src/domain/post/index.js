import React from 'react'

import PostHeader from './post-header'
import PostContent from './post-content'
import PostContainer from './post-container'

import { useFetchPost } from './hook'

const Post = () => {
  const [post, isPostFetching] = useFetchPost(1)
  if (Object.keys(post).length === 0) {
    return <PostContainer>{'loading'}</PostContainer>
  }

  if (isPostFetching) {
    return <PostContainer>{'loading'}</PostContainer>
  }

  return (
    <PostContainer>
      <PostHeader post={post}/>
      <PostContent post={post}/>
    </PostContainer>
  )
}

export default Post
