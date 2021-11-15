import React, { Suspense } from 'react'
import { useNearScreen } from 'hooks/useNearScreen'

// load TrendingSearches only when the user is near the element
const TrendingSearches = React.lazy(
  () => import('./TrendingSearches')
)

export default function LazyTrending () {
  const { isNearScreen, fromRef } = useNearScreen({ distance: '50px' })

  return (
    <div ref={fromRef}>
      <Suspense fallback={null}>
        {isNearScreen && <TrendingSearches />}
      </Suspense>
    </div>
  )
}
