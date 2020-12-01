import React from 'react'
import PropTypes from 'prop-types'

const data = [
  {
    id: 1,
    title: 'test 1',
    content: 'test content 1',
    created: '2012-04-23T18:25:43.511Z'
  },
  {
    id: 2,
    title: 'test 2',
    content: 'test content 2 that is larger then 200 chars ebebeebebeebebeebebeebebeebebeebebeebebeebebeebebeebebeebebeebebeebebeebebeebebeebebeebebeebebeebebeebebeebebeebebeebebeebebeebebeebebeebebeebebe',
    created: '2012-04-23T18:25:43.511Z'
  },
  {
    id: 3,
    title: 'test 3',
    content: 'test content 3',
    created: '2012-04-23T18:25:43.511Z'
  }
]

const App = () => <PostsList posts={data}></PostsList>

const PostsList = ({ posts }) => {
  console.log(posts)
  const listItems = posts.map(post => <li key={post.id}><PostsListElement post={post}/></li>)
  return <ul style={{ listStyleType: 'none' }}>{listItems}</ul>
}

const PostsListElement = ({ post: { title, created, content } }) => {
  return (
    <div>
      <h2>{title}</h2>
      <time>{created}</time>
      <p>{content.substring(0, 50) + '...'}</p>
    </div>
  )
}

PostsList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      content: PropTypes.string,
      created: PropTypes.string
    })
  )
}

PostsListElement.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string,
    created: PropTypes.string,
    content: PropTypes.string
  })
}

export default App
