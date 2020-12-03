import React from 'react'
import PropTypes from 'prop-types'

const App = () => <PostsList posts={[]}/>

const PostsList = ({ posts }) => {
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
