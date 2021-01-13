import React from 'react'

import ErrorMessage from '../../components/error-message'
import LoadingSpinner from '../../components/loading-spinner'

import PostHeader from './post-header'
import PostContent from './post-content'
import PostContainer from './post-container'

import { useParams } from 'react-router-dom'

import { useFetchPost } from './hook'

const Post = () => {
  const { postId } = useParams()
  const [post, isPostFetching, isFetchSuccessful] = useFetchPost(postId)

  if (isFetchSuccessful) {
    return <ErrorMessage text={'page not found'}/>
  }

  if (isPostFetching) {
    return <LoadingSpinner/>
  }

  return (
    <PostContainer>
      <PostHeader post={post}/>
      <PostContent post={post}/>
    </PostContainer>
  )
}

export default Post
