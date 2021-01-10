import React from 'react'
import PropTypes from 'prop-types'

const DiscreteTextLink = ({ href, text }) => {
  return <a href={href}>{text}</a>
}

DiscreteTextLink.propTypes = {
  href: PropTypes.string,
  text: PropTypes.string
}

export default DiscreteTextLink
