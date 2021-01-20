import React from 'react'

import { StyledBlog } from './style'
import { useFetchPosts } from './hook'

import BlogItemList from '../blog-item-list'
import ErrorMessage from '../error-message'
import LoadingSpinner from '../loading-spinner'

const Blog = () => {
  const { posts, areLoading, didErrorOccured } = useFetchPosts()

  if (areLoading) {
    return <LoadingSpinner/>
  }

  if (didErrorOccured) {
    return <ErrorMessage text={'can not load posts'}/>
  }

  return (
    <StyledBlog>
        <BlogItemList posts={posts}/>
    </StyledBlog>
  )
}

export default Blog
