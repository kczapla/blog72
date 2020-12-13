import React from 'react'
import PropTypes from 'prop-types'

import { AuthorLink, AuthorPreview, AuthorPreviewProfilePicture, AuthorName } from './author'

export const PostPreviewAuthor = ({ name, image, userLink }) => (
  <AuthorPreview>
    <AuthorLink href={userLink}>
      <AuthorPreviewProfilePicture src={image}></AuthorPreviewProfilePicture>
      <AuthorName>{name}</AuthorName>
    </AuthorLink>
  </AuthorPreview>
)

PostPreviewAuthor.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  userLink: PropTypes.string
}

export const PostPreview = ({ Author }) => {
    <div className="post-preview">
        <Author></Author>
    </div>
}

export const PostPreviewTitle = ({ title }) => {
  return (
  <div className='post-preview-title'>
    <h2>
        {title}
    </h2>
  </div>
  )
}

PostPreviewTitle.propTypes = {
  title: PropTypes.string
}

export const PostPreviewDate = ({ date }) => {
  return (
    <span className='post-preview-date'>{date}</span>
  )
}

PostPreviewDate.propTypes = {
  date: PropTypes.string
}

export const PostPreviewDescription = ({ text, charLimit }) => {
  let descriptionEnding = '...'
  if (text.length <= charLimit) {
    charLimit = text.length + 1
    descriptionEnding = ''
  }

  const newText = text.substring(0, charLimit) + descriptionEnding

  return (
    <div className='post-preview-description'>
      <p>
        {newText}
      </p>
    </div>
  )
}

PostPreviewDescription.propTypes = {
  text: PropTypes.string,
  charLimit: PropTypes.number
}
