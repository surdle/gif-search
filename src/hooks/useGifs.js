import { useState, useEffect, useContext } from 'react'
import getGifs from 'services/getGifs'
import { GifsContext } from 'context/GifsContext'

const INITIAL_PAGE = 0
export function useGifs ({ keyword }) {
  const [loading, setLoading] = useState(false)
  const [loadingNextPage, setLoadingNextPage] = useState(false)
  const [page, setPage] = useState(INITIAL_PAGE)
  const { gifs, setGifs } = useContext(GifsContext)

  // get keyword from localStorage
  const keywordToUse = keyword || localStorage.getItem('lastkeyword') || 'random'

  useEffect(() => {
    setLoading(true)

    setTimeout(() => {
      getGifs({ keyword: keywordToUse }).then(gif => {
        setGifs(gif)
        setLoading(false)
        // save keyword to localStorage
        keyword && localStorage.setItem('lastkeyword', keyword)
      })
    }, 500)
  }, [keywordToUse, keyword, setGifs])

  useEffect(() => {
    if (page === INITIAL_PAGE) return

    setLoadingNextPage(true)
    getGifs({ keyword: keywordToUse, page })
      .then(nextGifs => {
        setGifs(prevGifs => prevGifs.concat(nextGifs))
        setLoadingNextPage(false)
      })
  }, [keywordToUse, page])

  return { loading, loadingNextPage, gifs, setPage }
}
