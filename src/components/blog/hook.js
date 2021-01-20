import { useState, useEffect } from 'react'
import axios from 'axios'

export const useFetchPosts = () => {
  const [posts, setPosts] = useState([])
  const [areLoading, setAreLoading] = useState(true)
  const [didErrorOccured, setDidErrorOccured] = useState(false)

  useEffect(() => {
    const fetchPosts = async () => {
      setAreLoading(true)
      setDidErrorOccured(false)
      await axios.get('/posts')
        .then(response => {
          setPosts(response.data)
        })
        .catch(error => {
          setDidErrorOccured(true)
          console.log(error)
        })
      setAreLoading(false)
    }
    fetchPosts()
  }, [])

  return { posts, areLoading, didErrorOccured }
}
