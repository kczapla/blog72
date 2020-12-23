import React from 'react'
import PropTypes from 'prop-types'

import LinesEllipsis from 'react-lines-ellipsis'

import { StyledBlogItemContent } from './style'
import ReadMore from './read-more'

const BlogItemContent = ({ href, content }) => {
  return (
    <StyledBlogItemContent>
        <LinesEllipsis text={content} maxLine={3} ellipsis={'...'}/>
        <ReadMore href={href}/>
    </StyledBlogItemContent>
  )
}

BlogItemContent.propTypes = {
  href: PropTypes.string,
  content: PropTypes.string
}

export default BlogItemContent
