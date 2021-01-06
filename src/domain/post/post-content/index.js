import React from 'react'
import PropTypes from 'prop-types'
import ReactMarkdown from 'react-markdown'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { monoBlue as highlightstyle } from 'react-syntax-highlighter/dist/esm/styles/hljs'

const CodeRenderer = ({ language, value }) => {
  return (
    <SyntaxHighlighter style={highlightstyle} language={language}>
      {value}
    </SyntaxHighlighter>
  )
}

CodeRenderer.propTypes = {
  language: PropTypes.string,
  value: PropTypes.string
}

const PostContent = ({ post: { content } }) => {
  const renderers = { code: CodeRenderer }
  return <ReactMarkdown renderers={renderers}>{content}</ReactMarkdown>
}

PostContent.propTypes = {
  post: PropTypes.shape({
    content: PropTypes.string
  })
}

export default PostContent
