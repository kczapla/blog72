import React from 'react'
import PropTypes from 'prop-types'

export const PostPreviewAuthor = ({ name, image, userLink }) => (
    <div className='post-preview-author'>
        <a href={userLink}>
            <img src={image}></img>
        </a>
        <a href={userLink}>{name}</a>
    </div>
)

PostPreviewAuthor.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  userLink: PropTypes.string
}
