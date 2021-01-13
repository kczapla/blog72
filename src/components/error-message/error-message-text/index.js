import React from 'react'
import PropTypes from 'prop-types'

import { StyledErrorMessageText } from './style'

const ErrorMessageText = ({ text }) => {
  return <StyledErrorMessageText>{text}</StyledErrorMessageText>
}

ErrorMessageText.propTypes = {
  text: PropTypes.string
}

export default ErrorMessageText
