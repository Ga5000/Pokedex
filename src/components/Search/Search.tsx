import { useState } from 'react'
import PokeInfo from '../PokeInfo/PokeInfo';
import './Search.css';
import searchIcon from '../../assets/search.svg';

const Search = () => {

  const [searchText,setSearchText] = useState("");
 


  const handdleInputChange = (e : any) => {
      setSearchText(e.target.value)
  }
  return (
   <>
    <div className="search">
      <input type="text" placeholder='Search pokemon name...' autoComplete='off' onChange={handdleInputChange}/>
      <img src={searchIcon} alt="" />
    </div>
    <div className="pokemon-info">
      <PokeInfo searchedPokemon={searchText}></PokeInfo>
    </div>
   </>
  )
}

export default Search