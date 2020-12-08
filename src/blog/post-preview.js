import React from 'react'
import PropTypes, { string } from 'prop-types'

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

export const PostPreviewTag = ({ tag: { name, href } }) => {
  return (
    <div className='post-preview-tag'>
      <a href={href}>{name}</a>
    </div>
  )
}

PostPreviewTag.propTypes = {
  tag: PropTypes.shape({
    name: PropTypes.string,
    href: PropTypes.string
  })
}

export const PostPreviewTags = ({ tags }) => {
  const tagList = tags.map(tag => (
    <li key={tag.id}>
      <PostPreviewTag tag={tag}/>
    </li>
  ))

  return (
    <div className='post-preview-tags'>
      <ul>
        {tagList}
      </ul>
    </div>
  )
}

PostPreviewTags.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    href: PropTypes.string
  }))
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
