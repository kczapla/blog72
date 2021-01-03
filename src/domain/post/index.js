import React from 'react'

import PostHeader from './post-header'
import PostContent from './post-content'
import PostContainer from './post-container'

import { useParams } from 'react-router-dom'

import { useFetchPost } from './hook'

const Post = () => {
  const { postId } = useParams()
  const [post, isPostFetching, isFetchSuccessful] = useFetchPost(postId)

  if (isFetchSuccessful) {
    return <PostContainer>{'error occured'}</PostContainer>
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
