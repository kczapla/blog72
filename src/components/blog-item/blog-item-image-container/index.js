import React from 'react'
import PropTypes from 'prop-types'

import { StyledBlogItemImageContainer } from './style'
import BlogItemImage from '../../blog-item-image'

const BlogItemImageContainer = ({ post: { image } }) => {
  return (
    <StyledBlogItemImageContainer>
        <BlogItemImage image={image}/>
    </StyledBlogItemImageContainer>
  )
}

BlogItemImageContainer.propTypes = {
  post: PropTypes.shape({
    image: PropTypes.string
  })
}

export default BlogItemImageContainer
