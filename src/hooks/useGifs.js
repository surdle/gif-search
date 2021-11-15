import { useState, useEffect, useContext } from 'react'
import getGifs from '../services/getGifs'
import { GifsContext } from '../context/GifsContext'

export function useGifs ({ keyword }) {
  const [loading, setLoading] = useState(false)
  const { gifs, setGifs } = useContext(GifsContext)

  useEffect(() => {
    setLoading(true)
    // get keyword from localStorage
    const keywordToUse = keyword || localStorage.getItem('lastkeyword') || 'random'

    setTimeout(() => {
      getGifs({ keyword: keywordToUse }).then(gif => {
        setGifs(gif)
        setLoading(false)
        // save keyword to localStorage
        keyword && localStorage.setItem('lastkeyword', keyword)
      })
    }, 500)
  }, [keyword, setGifs])

  return { loading, gifs }
}
