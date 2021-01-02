import { useState, useEffect } from 'react'

import axios from 'axios'

export const useFetchPost = (initialPostId) => {
  const [isError, setIsError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [postId, setPostId] = useState(initialPostId)
  const [fetchedPostData, setFetchedPostData] = useState({})

  useEffect(() => {
    const fetchPost = async () => {
      setIsLoading(true)
      setIsError(false)
      await axios.get('/posts/'.concat(postId))
        .then(response => {
          setFetchedPostData(response.data)
        })
        .catch(error => {
          setIsError(true)
          console.log(error)
        })
      setIsLoading(false)
    }
    fetchPost()
  }, [postId])
  return [fetchedPostData, isLoading, isError]
}
