import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Games from './components/Games';
import Nintendo_NYC from './components/Nintendo-NYC';
import ComicCon from './components/NYC-ComicCon';

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/favorite-games">Favorite Games</Link>
          <Link to="/nintendo-nyc">Nintendo NYC</Link>
          <Link to="/nyc-comiccon">NYC Comic Con </Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorite-games" element={<Games />} />
          <Route path="/nintendo-nyc" element={<Nintendo_NYC />} />
          <Route path="/nyc-comiccon" element={<ComicCon />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

