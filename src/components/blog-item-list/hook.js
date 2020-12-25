import { useState, useEffect } from 'react'
import axios from 'axios'

export const useFetchPosts = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      await axios.get('/posts')
        .then(response => {
          console.log('resolved response ', response.data)
          setData(response.data)
        })
        .catch(error => {
          console.log(error)
        })
    }
    fetchPosts()
  }, [])
  return data
}
