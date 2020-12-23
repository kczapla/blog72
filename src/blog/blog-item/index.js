import React from 'react'
import PropTypes from 'prop-types'

import { StyledBlogItem } from './style'

import BlogItemImageContainer from './blog-item-image-container'
import BlogItemContentContainter from './blog-item-content-container'

const BlogItem = ({ post }) => {
  return (
      <StyledBlogItem>
        <BlogItemImageContainer post={post}/>
        <BlogItemContentContainter post={post}/>
      </StyledBlogItem>
  )
}

BlogItem.propTypes = {
  post: PropTypes.any
}

export default BlogItem
