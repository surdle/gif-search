import React, { useEffect, useState } from 'react'
import getGifs from '../services/getGifs'
import Gif from './Gif'

export default function ListOfGifs ({ params }) {
  const { keyword } = params
  const [gifs, setGifs] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)

    setTimeout(() => {
      getGifs({ keyword }).then(gifs => {
        setGifs(gifs)
        setLoading(false)
      })
    }, 1000)
  }, [keyword])

  return (
    <>
      {
      loading
        ? <div className='lds-dual-ring' />
        : gifs.map(({ id, url, title }) =>
          <Gif
            id={id}
            key={id}
            title={title}
            url={url}
          />)
    }
    </>
  )
}
