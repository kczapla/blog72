import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { PostPreviewAuthor } from './author'
import { PostTitle, PostPreviewDescription } from './post'
import { Tags } from './tag'

export const PostPreviewDate = ({ date }) => {
  return (
    <span className='post-preview-date'>{date}</span>
  )
}

PostPreviewDate.propTypes = {
  date: PropTypes.string
}

const PostGrid = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: auto auto;
`

const PostPreview = ({ post: { user: { name, image, userLink }, tags, created, title, content } }) => {
  console.log({ name }, { image }, { userLink }, { tags }, { created })
  return (
    <PostGrid>
      <PostPreviewAuthor name={name} image={image} userLink={userLink}></PostPreviewAuthor>
      <Tags tags={tags}></Tags>
      <PostTitle>{title}</PostTitle>
      <div></div>
      <PostPreviewDescription text={content} charLimit={200}/>
    </PostGrid>
  )
}

PostPreview.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string,
    content: PropTypes.string,
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
