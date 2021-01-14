import React from 'react'
import PropTypes from 'prop-types'

import Moment from 'react-moment'

export const DateInMMMDDCommaYYYYFormat = ({ date }) => {
  return <Moment format='MMM DD, YYYY'>{date}</Moment>
}

DateInMMMDDCommaYYYYFormat.propTypes = {
  date: PropTypes.string
}
