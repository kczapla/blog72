import { useState, useEffect } from 'react'
import axios from 'axios'

export const useFetchPosts = () => {
  const [posts, setPosts] = useState([])
  const [areLoading, setAreLoading] = useState(true)

  useEffect(() => {
    const fetchPosts = async () => {
      setAreLoading(true)
      await axios.get('/posts')
        .then(response => {
          setPosts(response.data)
        })
        .catch(error => {
          console.log(error)
        })
      setAreLoading(false)
    }
    fetchPosts()
  }, [])

  return { posts, areLoading }
}
