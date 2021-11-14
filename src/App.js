import './App.css'
import { Link, Route } from 'wouter'
import Detail from './pages/Detail'
import Home from './pages/Home'
import SearchResults from './pages/SearchResults'
import Search from './components/Search'
import StaticContext from './context/StaticContext'
import { GifsContextProvider } from './context/GifsContext'

function App () {
  return (
    <StaticContext.Provider value={{
      name: 'tristan',
      online: false
    }}
    >
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
    </StaticContext.Provider>
  )
}

export default App
