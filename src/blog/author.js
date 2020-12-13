import styled from 'styled-components'

export const AuthorLink = styled.a`
  style: hoover;
`

export const AuthorPreviewProfilePicture = styled.img`
  height: 25px;
  width: 25px;
  padding: 10px;
  alt: "Post Author's profile picture";
  vertical-align: middle;
`

export const AuthorName = styled.span`
  font-size: 15px;
  color: black;
`

export const AuthorPreview = styled.div`
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
