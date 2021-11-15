import { Link } from 'wouter'
import { useTrending } from 'hooks/useTrending'

export default function TrendingSearches () {
  const { loading, trendingSearches } = useTrending()

  return (
    <div className='Trending'>
      {
        loading
          ? <div
              className='lds-dual-ring'
            />
          : trendingSearches.map(trendingSearch => (
            <Link to={`/search/${trendingSearch}`} className='Term' key={trendingSearch}>{trendingSearch}
              <div className='Go'>&gt;</div>
            </Link>
          ))
      }
    </div>
  )
}
