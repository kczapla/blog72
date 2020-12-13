import React from 'react'
import PropTypes from 'prop-types'

import * as postHeader from './postHeader'

const PostPreview = ({ post }) => {
  return (
    <postHeader.PostPreviewHeader post={post}/>
  )
}

PostPreview.propTypes = {
  post: PropTypes.shape({
    created: PropTypes.string,
    user: PropTypes.shape({
      name: PropTypes.string,
      image: PropTypes.string,
      userLink: PropTypes.string
    }),
    tags: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      href: PropTypes.string
    }))
  })
}

export default PostPreview
