import React from 'react'
import PropTypes from 'prop-types'

import { StyledBlogItemTitle } from './style'

const BlogItemTitle = ({ title }) => {
  return <StyledBlogItemTitle>{title}</StyledBlogItemTitle>
}

BlogItemTitle.propTypes = {
  title: PropTypes.string
}

export default BlogItemTitle
