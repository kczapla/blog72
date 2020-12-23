import React from 'react'
import PropTypes from 'prop-types'

import { StyledDiscreteTextLink } from './style'

const DiscreteTextLink = ({ href, text }) => {
  return (<StyledDiscreteTextLink href={href}>{text}</StyledDiscreteTextLink>)
}

DiscreteTextLink.propTypes = {
  href: PropTypes.string,
  text: PropTypes.string
}

export default DiscreteTextLink
