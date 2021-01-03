import { useState, useEffect } from 'react'

import axios from 'axios'

export const useFetchPost = (initialPostId) => {
  const [isError, setIsError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [fetchedPostData, setFetchedPostData] = useState({})

  useEffect(() => {
    const fetchPost = async () => {
      setIsLoading(true)
      setIsError(false)
      await axios.get('/posts/'.concat(initialPostId))
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
  }, [])
  return [fetchedPostData, isLoading, isError]
}
