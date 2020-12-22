import React from 'react'
import PropTypes from 'prop-types'

import DiscreteTextLink from '../../discrete-text-link'

import { StyledReadMore } from './style'

const ReadMore = ({ href }) => {
  return (
      <StyledReadMore>
        <DiscreteTextLink href={href} text={'>read more'}/>
      </StyledReadMore>
  )
}

ReadMore.propTypes = {
  href: PropTypes.string
}

export default ReadMore
