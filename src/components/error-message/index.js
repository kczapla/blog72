import React from 'react'
import PropTypes from 'prop-types'

import ErrorMessageText from './error-message-text'
import ErrorMessageContainer from './error-message-container'

const ErrorMessage = ({ text }) => {
  return (
    <ErrorMessageContainer>
        <ErrorMessageText text={text}/>
    </ErrorMessageContainer>
  )
}

ErrorMessage.propTypes = {
  text: PropTypes.string
}

export default ErrorMessage
