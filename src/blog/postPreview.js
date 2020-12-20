import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import LinesEllipsis from 'react-lines-ellipsis'

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
  width: 280px;
  height: 180px;
  margin: 20px;
`
const BlogItemImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
`

const BlogItemContentContainter = styled.div`
  display: flex;
  flex: 1 1;
  margin: 10px;
  flex-direction: column;
`

const BlogItemContentHeader = styled.header`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`

const BlogItemMetaDataContainer = styled.div`
  font-size: 14px;
  font-style: normal;
  font-family: inherit;
  color: grey;
  letter-spacing: 1px;
  text-transform: uppercase;

  a {
    color: inherit;
  }
  a:link {
    text-decoration: none;
  }
  a:visited {
    text-decoration: none;
  }
  a:hover {
    color: orangered;
  }
  a:active {
    text-decoration: none;
  }
`

const BlogItemPostDate = styled.span`
  font-size: inherit;
  font-style: inherit;
`

const BlogItemByLine = styled.span`
  font-size: inherit;
  font-style: inherit;
  text-transform: lowercase;
`

const BlogItemAuthor = styled.span`
  font-size: inherit;
  font-style: inherit;
`

const BlogItemTitle = styled.h2`
  margin-bottom: 0;
`

const BlogItemContent = styled.div`
  font-size: inherit;
  font-style: inherit;
  color: black;
`

const PostPreview = ({ post: { user: { name, image, userLink }, tags, created, title, content } }) => {
  console.log(name, image, userLink, tags, created, title, content)
  return (
    <BlogItem>
      <BlogItemImageContainer>
        <BlogItemImage src="https://www.obrazydeco.pl/1007-large_default/jan-pawel-ii-obraz-drukowany-na-plotnie.jpg"/>
      </BlogItemImageContainer>
      <BlogItemContentContainter>
        <BlogItemContentHeader>
          <BlogItemTitle>{title}</BlogItemTitle>
          <BlogItemMetaDataContainer>
            <BlogItemPostDate>{created}</BlogItemPostDate>
            <BlogItemByLine> by </BlogItemByLine>
            <BlogItemAuthor><a href={userLink}>{name}</a></BlogItemAuthor>
          </BlogItemMetaDataContainer>
        </BlogItemContentHeader>
        <BlogItemContent>
          <LinesEllipsis text={content} maxLine={5} ellipsis={'...'}/>
        </BlogItemContent>
      </BlogItemContentContainter>
    </BlogItem>
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
