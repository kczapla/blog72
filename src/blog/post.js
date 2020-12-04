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
    <div className='post-preview-date'>{date}</div>
}

PostPreviewDate.propTypes = {
  date: PropTypes.string
}

export const PostPreviewTag = ({ tagName }) => {
    <div className='post-preview-tag'>{tagName}</div>
}
