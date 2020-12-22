import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import LinesEllipsis from 'react-lines-ellipsis'

import ByLine from './by-line'
import BlogItemImage from './blog-item-image'
import BlogItemTitle from './blog-item-title'
import BlogItemAuthor from './blog-item-author'
import BlogItemPostDate from './blog-item-date'
import BlogItemMetadataContainer from './blog-item-metadata-container'

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
          <BlogItemTitle title={title}/>
          <BlogItemMetadataContainer>
            <BlogItemPostDate date={created}/>
            <ByLine/>
            <BlogItemAuthor href={author.href} name={author.name}/>
          </BlogItemMetadataContainer>
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
