import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { PostTitle } from './post'
// import Tags from './tag'

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
  background-color: blue;
  grid-gap: 20px;
  grid-template-columns: auto auto auto;
`

const PostGridItem = styled.div`
  background-color: red;
`

const PostPreview = ({ post: { user: { name, image, userLink }, tags, created } }) => {
  console.log({ name }, { image }, { userLink }, { tags }, { created })
  return (
    <PostGrid>
      <PostTitle>ebebe</PostTitle>
      <PostGridItem>ebebe</PostGridItem>
      <PostGridItem>ebebe</PostGridItem>
      <PostGridItem>ebebe</PostGridItem>
      <PostGridItem>ebebe</PostGridItem>
      <PostGridItem>ebebe</PostGridItem>
      <PostGridItem>ebebe</PostGridItem>
      <PostGridItem>ebebe</PostGridItem>
      <PostGridItem>ebebe</PostGridItem>
    </PostGrid>
  )
}

PostPreview.propTypes = {
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

export default PostPreview
