import React from 'react'
import PropTypes from 'prop-types'

import { StyledBlogItemImage } from './style'

const BlogItemImage = ({ image }) => {
  return (<StyledBlogItemImage image={image}/>)
}

BlogItemImage.propTypes = {
  image: PropTypes.string
}

export default BlogItemImage
