import React from 'react'
import PropTypes from 'prop-types'

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

export const PostPreviewTag = ({ name, href }) => {
  return (
    <div className='post-preview-tag'>
      <a href={href}>{name}</a>
    </div>
  )
}

PostPreviewTag.propTypes = {
  name: PropTypes.string,
  href: PropTypes.string
}
