import useGlobalGifs from '../../hooks/useGlobalGifs'
import Gif from '../../components/Gif'

export default function Detail ({ params }) {
  const gifs = useGlobalGifs()
  console.log({ gifs })

  // const gif = gifs.find(gif => gif.id === params.id)
  console.log(params.id)

  return (
    <Gif id={params.id} title={params.id} url='TEST' />
  )
}
