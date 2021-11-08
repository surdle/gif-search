
export default function Gif ({ title, url, id }) {
  return (
    <a href={`/gif/${id}`} className='Gif'>
      <img src={url} alt={title} />
    </a>
  )
}
