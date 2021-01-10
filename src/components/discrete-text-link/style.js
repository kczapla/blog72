import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const StyledDiscreteTextLink = styled(Link)`
  color: inherit;

  &:link {
    text-decoration: none;
  }

  &:visited {
    text-decoration: none;
  }

  &:hover {
    color: orangered;
  }
  
  &:active {
    text-decoration: none;
  }
`
