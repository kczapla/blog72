import { Link } from 'react-router-dom'
import styled from 'styled-components'

const NavigationBarLink = styled(Link)`
    padding: 10px;
    color: inherit;
    text-decoration: none;

    &:hover {
        background-color: black;
        color: white;
    }

    &:active {
        background-color: black;
        color: white;
    }
`

export default NavigationBarLink
