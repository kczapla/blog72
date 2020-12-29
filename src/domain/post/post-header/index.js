import React from 'react'
import PropTypes from 'prop-types'

import ByLine from '../../../components/by-line'
import BlogItemTitle from '../../../components/blog-item-title'
import BlogItemAuthor from '../../../components/blog-item-author'
import BlogItemPostDate from '../../../components/blog-item-date'
import BlogItemMetadataContainer from '../../../components/blog-item-metadata-container'

import { StyledPostHeader } from './style'

const PostHeader = ({ post: { title, created, author } }) => {
  return (
      <StyledPostHeader>
        <BlogItemTitle title={title}/>
        <BlogItemMetadataContainer>
            <BlogItemPostDate date={created}/>
            <ByLine/>
            <BlogItemAuthor name={author.name} href={author.href}/>
        </BlogItemMetadataContainer>
      </StyledPostHeader>
  )
}

PostHeader.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string,
    created: PropTypes.string,
    author: PropTypes.object
  })
}

export default PostHeader
