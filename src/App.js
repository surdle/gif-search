import './App.css'
import { Link, Route } from 'wouter'
import Detail from './pages/Detail'
import Home from './pages/Home'
import SearchResults from './pages/SearchResults'
import Search from './components/Search'

function App () {
  return (
    <div className='App'>
      <section className='App-content'>
        <Link to='/'>
          <h1>Gif Finder</h1>
        </Link>
        <Search />
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
      </section>
    </div>
  )
}

export default App
