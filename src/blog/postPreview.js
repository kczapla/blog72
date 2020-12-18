import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { PostPreviewAuthor } from './author'
import { PostTitle, PostPreviewDescription } from './post'
import { Tags } from './tag'

export const PostPreviewDate = ({ date }) => {
  return (
    <span className='post-preview-date'>{date}</span>
  )
}

PostPreviewDate.propTypes = {
  date: PropTypes.string
}

const PostGridLayout = styled.div`
  display: grid;
  grid-template-areas:
    "header header"
    "main pictureItem"
    "main pictureItem"
`

const Header = styled.div`
  grid-area: header;
`

const Main = styled.div`
  grid-area: main;
`

const PictureItem = styled.div`
  grid-area: pictureItem;
`

const PostPreview = ({ post: { user: { name, image, userLink }, tags, created, title, content } }) => {
  return (
    <PostGridLayout>
      <Header>
        <PostPreviewAuthor name={name} image={image} userLink={userLink}></PostPreviewAuthor>
        <Tags tags={tags}></Tags>
      </Header>
      <Main>
        <PostTitle>{title}</PostTitle>
        <PostPreviewDescription text={content} charLimit={200}/>
      </Main>
      <PictureItem>
        <img src="https://www.obrazydeco.pl/1007-large_default/jan-pawel-ii-obraz-drukowany-na-plotnie.jpg" width={250} height={250}/>
      </PictureItem>
    </PostGridLayout>
  )
}

PostPreview.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string,
    content: PropTypes.string,
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

export default PostPreview
