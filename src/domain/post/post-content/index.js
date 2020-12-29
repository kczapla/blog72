import React from 'react'
import PropTypes from 'prop-types'

import { StyledPostContent } from './style'

const PostContent = ({ post: { content } }) => {
  return <StyledPostContent>{content}</StyledPostContent>
}

PostContent.propTypes = {
  post: PropTypes.shape({
    content: PropTypes.string
  })
}

export default PostContent
