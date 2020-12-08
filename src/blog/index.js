import React from 'react'
import PropTypes from 'prop-types'

import * as author from './author'
import * as post from './post-preview'

const PostPreviewHeader = ({ post: { user: { name, image, userLink }, tags, created } }) => {
  return (
    <div className="post-preview-header">
        <author.PostPreviewAuthor name={name} image={image} userLink={userLink}/>
        <post.PostPreviewTags tags={tags}/>
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
