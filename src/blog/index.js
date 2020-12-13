import React from 'react'
import PropTypes from 'prop-types'

import * as post from './postPreview'
import * as tag from './tag'
import * as utils from './utils'

const PostPreviewHeader = ({ post: { user: { name, image, userLink }, tags, created } }) => {
  return (
    <div className="post-preview-header">
        <post.PostPreviewAuthor name={name} image={image} userLink={userLink}/>
        <tag.Tags tags={tags}/>
        <utils.PostCreatedDate>{created}</utils.PostCreatedDate>
    </div>
  )
}

PostPreviewHeader.propTypes = {
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

export default PostPreviewHeader
