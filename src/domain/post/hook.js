import { useState, useEffect } from 'react'

import axios from 'axios'

export const useFetchPost = (initialPostId) => {
  const [postId, setPostId] = useState(initialPostId)
  const [fetchedPostData, setFetchedPostData] = useState({})

  useEffect(() => {
    const fetchPost = async () => {
      await axios.get('/posts/'.concat(postId))
        .then(response => {
          setFetchedPostData(response.data)
        })
        .catch(error => {
          console.log(error)
        })
    }
    fetchPost()
  }, [postId])
  return fetchedPostData
}
