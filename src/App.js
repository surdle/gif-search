import './App.css'
import { Link, Route } from 'wouter'
import Detail from './pages/Detail'
import Home from './pages/Home'
import SearchResults from './pages/SearchResults'
import Search from './components/Search'
import { GifsContextProvider } from './context/GifsContext'

function App () {
  return (

    <div className='App'>
      <section className='App-content'>
        <Link to='/'>
          <h1>Gif Finder</h1>
        </Link>
        <Search />
        <GifsContextProvider>
          <Route
            path='/'
            component={Home}
          />
          <Route
            path='/search/:keyword'
            component={SearchResults}
          />
          <Route
            path='/gif/:id'
            component={Detail}
          />
        </GifsContextProvider>
      </section>
    </div>

  )
}

export default App
