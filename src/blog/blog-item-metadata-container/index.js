import React from 'react'
import PropTypes from 'prop-types'

import { StyledBlogItemMetadataContainer } from './style'

import ByLine from '../by-line'
import BlogItemAuthor from '../blog-item-author'
import BlogItemPostDate from '../blog-item-date'

const BlogItemMetadataContainer = ({ author, created }) => {
  return (
    <StyledBlogItemMetadataContainer>
        <BlogItemPostDate date={created}/>
        <ByLine/>
        <BlogItemAuthor href={author.href} name={author.name}/>
    </StyledBlogItemMetadataContainer>
  )
}

BlogItemMetadataContainer.propTypes = {
  created: PropTypes.string,
  author: PropTypes.shape({
    href: PropTypes.href,
    name: PropTypes.string
  })
}

export default BlogItemMetadataContainer
