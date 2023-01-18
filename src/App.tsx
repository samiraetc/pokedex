import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header';
import Details from './pages/Details/Details';
import Favorites from './pages/Favorites/Favorites';
import Home from './pages/Home/Home';

function App() {
  return (

    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/favorites' element={<Favorites />} />
        <Route path='/details/:id' element={<Details />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App
