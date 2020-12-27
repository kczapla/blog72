import React from 'react'

import BlogItem from '../blog-item'
import { useFetchPosts } from './hook'
import { StyledBlogItemList } from './style'

const BlogItemList = () => {
  const rawPosts = useFetchPosts()
  const posts = rawPosts.map(post => {
    return <BlogItem key={post.id} post={post}/>
  })
  return (
    <StyledBlogItemList>{posts}</StyledBlogItemList>
  )
}

export default BlogItemList
