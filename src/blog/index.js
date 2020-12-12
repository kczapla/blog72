import React from 'react'
import PropTypes from 'prop-types'

import * as post from './postPreview'
import * as tag from './tag'

const PostPreviewHeader = ({ post: { user: { name, image, userLink }, tags, created } }) => {
  return (
    <div className="post-preview-header">
        <post.PostPreviewAuthor name={name} image={image} userLink={userLink}/>
        <tag.Tags tags={tags}/>
        <post.PostPreviewDate date={created}/>
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
