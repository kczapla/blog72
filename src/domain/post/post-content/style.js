import styled from 'styled-components'
import ReactMarkdown from 'react-markdown'

export const StyledPostContent = styled.article`
    font-color: black;
`

export const StyledReactMarkdown = styled(ReactMarkdown)`
    & > h1, h2, h3, h4, h5, h6 {
        text-align: center;
    }
    * > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center center;
    }
`
