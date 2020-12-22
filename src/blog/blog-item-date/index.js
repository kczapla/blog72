import React from 'react'
import PropTypes from 'prop-types'

import Moment from 'react-moment'

const BlogItemPostDate = ({ date }) => {
  return <Moment format='MMM DD, YYYY'>{date}</Moment>
}

BlogItemPostDate.propTypes = {
  date: PropTypes.string
}

export default BlogItemPostDate
