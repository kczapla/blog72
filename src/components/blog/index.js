import React from 'react'

import { StyledBlog } from './style'
import { useFetchPosts } from './hook'

import BlogItemList from '../blog-item-list'

const Blog = () => {
  const posts = useFetchPosts()

  return (
    <StyledBlog>
        <BlogItemList posts={posts}/>
    </StyledBlog>
  )
}

export default Blog
