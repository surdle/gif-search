import ListOfGifs from 'components/ListOfGifs'
import TrendingSearches from 'components/TrendingSearches'
export default function Home () {
  return (
    <>
      <span>Recent searched gifs</span>

      <ListOfGifs />
      <span>Trending terms</span>
      <TrendingSearches />

    </>
  )
}
