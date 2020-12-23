import React from 'react'
import PropTypes from 'prop-types'

import { StyledBlogItemContentContainter } from './style'

import BlogItemContent from '../../blog-item-content'
import BlogItemContentHeader from '../../blog-item-content-header'

const BlogItemContentContainter = ({ post: { title, content, created, author } }) => {
  return (
    <StyledBlogItemContentContainter>
        <BlogItemContentHeader title={title} created={created} author={author}/>
        <BlogItemContent href={'https://google.com'} content={content}/>
    </StyledBlogItemContentContainter>
  )
}

BlogItemContentContainter.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string,
    content: PropTypes.string,
    created: PropTypes.string,
    author: PropTypes.shape({
      name: PropTypes.string,
      href: PropTypes.string
    })
  })
}

export default BlogItemContentContainter
