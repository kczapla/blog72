import { useState, useEffect } from 'react'

import axios from 'axios'

export const useFetchPost = (initialPostId) => {
  const [isLoading, setIsLoading] = useState(true)
  const [postId, setPostId] = useState(initialPostId)
  const [fetchedPostData, setFetchedPostData] = useState({})

  useEffect(() => {
    const fetchPost = async () => {
      setIsLoading(true)
      await axios.get('/posts/'.concat(postId))
        .then(response => {
          setFetchedPostData(response.data)
        })
        .catch(error => {
          console.log(error)
        })
      setIsLoading(false)
    }
    fetchPost()
  }, [postId])
  return [fetchedPostData, isLoading]
}
