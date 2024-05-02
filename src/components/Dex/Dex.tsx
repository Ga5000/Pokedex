import { Route, Routes, Navigate } from 'react-router-dom';
import './Dex.css';
import Navbar from '../Navbar/Navbar';
import Home from '../Home/Home';
import Search from '../Search/Search';
import Pokedex from '../Pokedex/Pokedex';
import Pokemon from '../Pokemon/Pokemon';

const Dex = () => {
  return (
    <div className="dex-container">
      <div className="nav">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/pokedex" element={<Pokedex />} />
        <Route path="/pokemon" element={<Pokemon />} />
      </Routes>
    </div>
  );
};

export default Dex;
