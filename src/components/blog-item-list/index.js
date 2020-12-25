import React from 'react'

import BlogItem from '../blog-item'
import { useFetchPosts } from './hook'

const BlogItemList = () => {
  const rawPosts = useFetchPosts()
  const posts = rawPosts.map(post => {
    return <BlogItem key={post.id} post={post}/>
  })
  return (
    <div>{posts}</div>
  )
}

export default BlogItemList
