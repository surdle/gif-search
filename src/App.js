import React, { useState } from 'react'
import './App.css'
import ListOfGifs from './components/ListOfGifs'
import { Link, Route } from 'wouter'

function App () {
  const [keyword, setKeyword] = useState('fox')

  return (
    <div className='App'>
      <section className='App-content'>
        <h1>Gif Finder</h1>
        <button onClick={() =>
          keyword === 'anime' ? setKeyword('fox') : setKeyword('anime')}
        >
          Click me to change gif
        </button>
        <Link to='/search/cat'>
          Cat gifs
          <div className='Go'>&gt;</div>
        </Link>
        <div className='Gifs'>
          <Route
            path='/search/:keyword'
            component={ListOfGifs}
          />
        </div>
      </section>
    </div>
  )
}

export default App
