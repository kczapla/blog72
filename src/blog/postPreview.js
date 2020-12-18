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
  grid-auto-columns: 1fr 3fr;
  grid-auto-rows: 1fr min-content;
  grid-template-areas:
    "author tags pictureItem"
    "main main pictureItem"
    "main main pictureItem"
`

const Author = styled.div`
  grid-area: author;
`

const Taggs = styled.div`
  grid-area: tags;
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
      <Author>
        <PostPreviewAuthor name={name} image={image} userLink={userLink}></PostPreviewAuthor>
      </Author>
      <Taggs><Tags tags={tags}/></Taggs>
      <Main>
        <PostTitle>{title}</PostTitle>
        <PostPreviewDescription text={content} charLimit={200}/>
      </Main>
      <PictureItem>
        <img object-fit="cover" src="https://www.obrazydeco.pl/1007-large_default/jan-pawel-ii-obraz-drukowany-na-plotnie.jpg" width={250} height={250}/>
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
