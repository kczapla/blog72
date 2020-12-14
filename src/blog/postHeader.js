import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import * as author from './author'
import * as tag from './tag'

const StyledPostPreviewHeader = styled.div`
    dispaly: table;
    border-spacing: 10px;
`

const StyledPreviewHeaderOuterCell = styled.div`
    display: table-cell;
    width: 20%;
`

const StyledPreviewHeaderMiddleCell = styled.div`
    display: table-cell;
    width: 80%;
`

export const PostPreviewHeader = ({ post: { user: { name, image, userLink }, tags, created } }) => {
  return (
    <StyledPostPreviewHeader>
        <StyledPreviewHeaderOuterCell>
            <author.PostPreviewAuthor name={name} image={image} userLink={userLink}/>
        </StyledPreviewHeaderOuterCell>
        <StyledPreviewHeaderMiddleCell>
            <tag.Tags tags={tags}/>
        </StyledPreviewHeaderMiddleCell>
    </StyledPostPreviewHeader>
  )
}

PostPreviewHeader.propTypes = {
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
