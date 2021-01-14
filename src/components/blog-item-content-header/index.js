import React from 'react'
import PropTypes from 'prop-types'

import { StyledBlogItemContentHeader } from './style'

import ByLine from '../by-line'
import BlogItemTitle from '../blog-item-title'
import BlogItemAuthor from '../blog-item-author'
import BlogItemMetadataContainer from '../blog-item-metadata-container'

import { DateInMMMDDCommaYYYYFormat } from '../../services/format/date'

const BlogItemContentHeader = ({ title, created, author }) => {
  console.log(author)
  return (
    <StyledBlogItemContentHeader>
        <BlogItemTitle title={title}/>
        <BlogItemMetadataContainer>
            <DateInMMMDDCommaYYYYFormat date={created}/>
            <ByLine/>
            <BlogItemAuthor href={`/authors/${author.id}`} name={author.name}/>
        </BlogItemMetadataContainer>
    </StyledBlogItemContentHeader>
  )
}

BlogItemContentHeader.propTypes = {
  title: PropTypes.string,
  created: PropTypes.string,
  author: PropTypes.any
}

export default BlogItemContentHeader
