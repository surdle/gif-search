import Gif from './Gif'
import { useGifs } from '../hooks/useGifs'

export default function ListOfGifs ({ keyword }) {
  const { loading, gifs } = useGifs({ keyword })

  return (
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
  )
}
