import Gif from 'components/Gif'
import { useGifs } from 'hooks/useGifs'

export default function ListOfGifs ({ keyword }) {
  const { loading, gifs, setPage } = useGifs({ keyword })

  // get the previous page using setPage instead of using the page prop
  const handleNextPage = () => setPage(prevPage => prevPage + 1)

  return (
    <>
      <div className='Gifs'>
        {
        loading
          ? <div
              className='lds-dual-ring'
            />
          : gifs.map(({ id, url, title }) =>
            <Gif
              id={id}
              key={id}
              title={title}
              url={url}
            />
          )
      }
      </div>
      <button onClick={handleNextPage}>Next Page</button>
    </>
  )
}
