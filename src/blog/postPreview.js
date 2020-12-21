import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import LinesEllipsis from 'react-lines-ellipsis'
import Moment from 'react-moment'

import BlogItemImage from './blog-item-image'

const BlogItemContainer = styled.article`
  display: flex;
  flex-direction: row;

  &:hover {
    box-shadow: 0px 0px 30px #888888;
  }
`

const BlogItemImageContainer = styled.div`
  postition: relative;
  overflow: hidden;
  width: 280px;
  height: 180px;
  margin: 20px;
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

const PostPreview = ({ post: { author, image, created, title, content } }) => {
  return (
    <BlogItemContainer>
      <BlogItemImageContainer>
        <BlogItemImage image={image}/>
      </BlogItemImageContainer>
      <BlogItemContentContainter>
        <BlogItemContentHeader>
          <BlogItemTitle>{title}</BlogItemTitle>
          <BlogItemMetaDataContainer>
            <BlogItemPostDate>
              <Moment format='MMM DD, YYYY'>{created}</Moment>
            </BlogItemPostDate>
            <BlogItemByLine> by </BlogItemByLine>
            <BlogItemAuthor><a href={author.href}>{author.name}</a></BlogItemAuthor>
          </BlogItemMetaDataContainer>
        </BlogItemContentHeader>
        <BlogItemContent>
          <LinesEllipsis text={content} maxLine={5} ellipsis={'...'}/>
        </BlogItemContent>
      </BlogItemContentContainter>
    </BlogItemContainer>
  )
}

PostPreview.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string,
    image: PropTypes.string,
    content: PropTypes.string,
    created: PropTypes.string,
    author: PropTypes.shape({
      name: PropTypes.string,
      href: PropTypes.string
    })
  })
}

export default PostPreview
