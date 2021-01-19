import React from 'react'

import { StyledBlog } from './style'
import { useFetchPosts } from './hook'

import BlogItemList from '../blog-item-list'
import LoadingSpinner from '../loading-spinner'

const Blog = () => {
  const { posts, areLoading } = useFetchPosts()

  if (areLoading) {
    return <LoadingSpinner/>
  }

  return (
    <StyledBlog>
        <BlogItemList posts={posts}/>
    </StyledBlog>
  )
}

export default Blog
