import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

export const PostTitle = styled.h1`
    color: black
`

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
