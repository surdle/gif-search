import useGlobalGifs from 'hooks/useGlobalGifs'
import Gif from 'components/Gif'

export default function Detail ({ params }) {
  const gifs = useGlobalGifs()

  const gif = gifs.find(gif => gif.id === params.id)

  return (
    <div className='Detail'>
      {gif && <span>{decodeURI(gif.title)}</span>}
      {
      gif
        ? <Gif id={params.id} title={gif.title} url={gif.url} />
        : <p>No gif :(</p>
      }
    </div>
  )
}
