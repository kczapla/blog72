import React from 'react'
import PropTypes from 'prop-types'

import BlogItem from '../blog-item'
import { StyledBlogItemList } from './style'

const BlogItemList = ({ posts }) => {
  const blogItemList = posts.map(post => {
    return <BlogItem key={post.id} post={post}/>
  })

  return (
    <StyledBlogItemList>{blogItemList}</StyledBlogItemList>
  )
}

BlogItemList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object)
}

export default BlogItemList
