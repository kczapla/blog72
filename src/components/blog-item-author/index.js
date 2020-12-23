import React from 'react'
import PropTypes from 'prop-types'

import { StyledBlogItemAuthor } from './style'

import DiscreteTextLink from '../discrete-text-link'

const BlogItemAuthor = ({ href, name }) => {
  return (
    <StyledBlogItemAuthor>
        <DiscreteTextLink href={href} text={name}/>
    </StyledBlogItemAuthor>
  )
}

BlogItemAuthor.propTypes = {
  href: PropTypes.string,
  name: PropTypes.string
}

export default BlogItemAuthor
