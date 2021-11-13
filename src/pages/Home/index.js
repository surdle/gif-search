import React, { useState } from 'react'
import { Link } from 'wouter'
import { useGifs } from '../../hooks/useGifs'
import ListOfGifs from '../../components/ListOfGifs'

const POPULAR_KEYWORDS = ['fox', 'dog', 'cat', 'bird', 'panda']
const ANOTHER_KEYWORDS = ['fish', 'horse', 'elephant', 'lion', 'tiger']

export default function Home () {
  const [keywords, setKeywords] = useState(POPULAR_KEYWORDS)
  const { loading, gifs } = useGifs({ keyword: 'dice' })

  return (
    <>
      <button onClick={() =>
        keywords === POPULAR_KEYWORDS ? setKeywords(ANOTHER_KEYWORDS) : setKeywords(POPULAR_KEYWORDS)}
      >
        Click me to change keywords
      </button>
      {keywords.map(keyword =>
        <Link to={`/search/${keyword}`} key={keyword}>
          {keyword} gifs
          <div className='Go'>&gt;</div>
        </Link>
      )}
      <span>Recent searched gifs</span>
      {
      loading
        ? <div className='lds-dual-ring' />
        : <ListOfGifs gifs={gifs} />
      }
    </>
  )
}
