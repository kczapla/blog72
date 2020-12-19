import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { PostPreviewAuthor } from './author'
// import { PostTitle, PostPreviewDescription } from './post'
import { Tags } from './tag'

export const PostPreviewDate = ({ date }) => {
  return (
    <span className='post-preview-date'>{date}</span>
  )
}

PostPreviewDate.propTypes = {
  date: PropTypes.string
}

const BlogItem = styled.article`
  display: flex
`

const BlogItemImageContainer = styled.div`
  postition: relative;
  overflow: hidden;
`
const BlogItemImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
`

const BlogItemContent = styled(BlogItemImageContainer)`
  display: flex;
  flex: 1 1;
  margin: 20px;
`

const BlogItemContentHeader = styled.header`
  display: flex;
  flex-direction: row;
  align-items: baseline;
`

const PostPreview = ({ post: { user: { name, image, userLink }, tags, created, title, content } }) => {
  console.log(name, image, userLink, tags, created, title, content)
  return (
    <BlogItem>
      <BlogItemImageContainer>
        <BlogItemImage src="https://www.obrazydeco.pl/1007-large_default/jan-pawel-ii-obraz-drukowany-na-plotnie.jpg"/>
      </BlogItemImageContainer>
      <BlogItemContent>
        <BlogItemContentHeader>
          <PostPreviewAuthor name={name} image={image} userLink={userLink}/>
          <Tags tags={tags}></Tags>
        </BlogItemContentHeader>
      </BlogItemContent>
    </BlogItem>
    // <PostGridLayout>
    //   <Author>
    //     <PostPreviewAuthor name={name} image={image} userLink={userLink}></PostPreviewAuthor>
    //   </Author>
    //   <Taggs><Tags tags={tags}/></Taggs>
    //   <Main>
    //     <PostTitle>{title}</PostTitle>
    //     <PostPreviewDescription text={content} charLimit={200}/>
    //   </Main>
    //   <PictureItem>
    //     <img object-fit="cover" src="https://www.obrazydeco.pl/1007-large_default/jan-pawel-ii-obraz-drukowany-na-plotnie.jpg" width={250} height={250}/>
    //   </PictureItem>
    // </PostGridLayout>
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
