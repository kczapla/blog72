import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const AuthorLink = styled.a`
  style: hoover;
`

const AuthorPreviewProfilePicture = styled.img`
  height: 25px;
  width: 25px;
  padding: 10px;
  alt: "Post Author's profile picture";
  vertical-align: middle;
`

const AuthorName = styled.span`
  font-size: 15px;
  color: black;
`

const AuthorPreview = styled.div`
  a:link {
    text-decoration: none;
  }
  a:visited {
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
  a:active {
    text-decoration: underline;
  }
`

export const PostPreviewAuthor = ({ name, image, userLink }) => (
  <AuthorPreview>
    <AuthorLink href={userLink}>
      <AuthorPreviewProfilePicture src={image}></AuthorPreviewProfilePicture>
      <AuthorName>{name}</AuthorName>
    </AuthorLink>
  </AuthorPreview>
)

PostPreviewAuthor.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  userLink: PropTypes.string
}
