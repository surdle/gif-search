import { useState, useEffect } from 'react'
import getTrendingSearches from 'services/getTrending'

export function useTrending () {
  const [loading, setLoading] = useState(false)
  const [trendingSearches, setTrendingSearches] = useState([])

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      getTrendingSearches().then(TrendingTerms => {
        setTrendingSearches(TrendingTerms)
        setLoading(false)
      })
    }, 500)
  }, [])

  return { loading, trendingSearches }
}
