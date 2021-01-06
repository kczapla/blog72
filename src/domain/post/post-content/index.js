import React from 'react'
import PropTypes from 'prop-types'
import ReactMarkdown from 'react-markdown'

const PostContent = ({ post: { content } }) => {
  return <ReactMarkdown>{content}</ReactMarkdown>
}

PostContent.propTypes = {
  post: PropTypes.shape({
    content: PropTypes.string
  })
}

export default PostContent
