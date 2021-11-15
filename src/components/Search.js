import { useState } from 'react'
import { useLocation } from 'wouter'

export default function Search () {
  const [keyword, setKeyword] = useState('')
  const [path, pushLocation] = useLocation()

  const handleSubmit = e => {
    e.preventDefault()
    pushLocation(`/search/${keyword}`)
    console.log(path)
  }

  const handleChange = e => {
    setKeyword(e.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Search for a gif'
        value={keyword}
        onChange={handleChange}
      />
    </form>
  )
}
