import { useState, useEffect } from 'react'
import getGifs from '../services/getGifs'

export function useGifs ({ keyword }) {
  const [gifs, setGifs] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      getGifs({ keyword }).then(gifs => {
        setGifs(gifs)
        setLoading(false)
      })
    }, 1000)
  }, [keyword])

  return { loading, gifs }
}
