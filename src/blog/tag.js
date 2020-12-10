import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const TagName = styled.span`
    color: black;
    font: 15px;
`

const TagLink = styled.a`

`

const TagBox = styled.button`
    ${'' /* background-color: whitesmoke; */}
    background-color: rgb(240,240,240);
    border-radius: 5px;
    border: none;

    a:link {
        text-decoration: none;
    }
    a:visited {
        text-decoration: none;
    }
    a:hover {
        text-decoration: underline;
    }
    a:active {
        text-decoration: underline;
    }
`

export const Tag = ({ tag: { name, href } }) => {
  return (
    <TagBox>
        <TagLink href={href}>
            <TagName>{name}</TagName>
        </TagLink>
    </TagBox>
  )
}

Tag.propTypes = {
  tag: PropTypes.shape({
    name: PropTypes.string,
    href: PropTypes.string
  })
}
