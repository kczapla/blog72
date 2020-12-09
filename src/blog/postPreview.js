import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const AuthorLink = styled.a`
  style: hoover;
`

const AuthorPreviewProfilePicture = styled.img`
  height: 15px;
  width: 15px;
  alt: "Post Author's profile picture"
`

const AuthorPreviewName = styled.text`
  font-size: 15px;
  color: black;
`

const AuthorPreview = styled.span`
  a:link {
    text-decoration: none;
  }
  a:visited {
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
  a:active {
    text-decoration: underline;
  }
`

export const PostPreviewAuthor = ({ name, image, userLink }) => (
  <AuthorPreview>
    <AuthorLink href={userLink}>
      <AuthorPreviewName>
        <AuthorPreviewProfilePicture src={image}></AuthorPreviewProfilePicture>
        {name}
      </AuthorPreviewName>
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
