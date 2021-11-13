import Gif from './Gif'

export default function ListOfGifs ({ gifs }) {
  return (
    <div className='Gifs'>
      {gifs.map(({ id, url, title }) =>
        <Gif
          id={id}
          key={id}
          title={title}
          url={url}
        />
      )}
    </div>
  )
}
