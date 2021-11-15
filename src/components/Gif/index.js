import { Link } from 'wouter'
// using a regular <a> refresh the app
export default function Gif ({ title, url, id }) {
  return (
    <Link to={`/gif/${id}`} className='Gif'>
      <img src={url} alt={title} />
    </Link>
  )
}
