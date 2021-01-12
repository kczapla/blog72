import React from 'react'

import LoadingMessage from './loading-message'
import LoadingSpinnerContainer from './loading-spinner-contener'
import LoadingSpinnerAnimation from './loading-spinner-animation'

const LoadingSpinner = () => {
  return (
    <LoadingSpinnerContainer>
      <LoadingSpinnerAnimation/>
      <LoadingMessage/>
    </LoadingSpinnerContainer>
  )
}

export default LoadingSpinner
